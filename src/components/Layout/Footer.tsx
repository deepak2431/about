import React, { useMemo } from 'react'

import classNames from 'classnames'
import GithubIcon from 'mdi-react/GithubIcon'
import LinkedinIcon from 'mdi-react/LinkedinIcon'
import SpotifyIcon from 'mdi-react/SpotifyIcon'
import TwitterIcon from 'mdi-react/TwitterIcon'
import YouTubeIcon from 'mdi-react/YoutubeIcon'
import Link from 'next/link'
import { FaDiscord as DiscordIcon } from 'react-icons/fa'

import { Badge, Heading } from '..'
import { buttonLocation, buttonStyle } from '../../data/tracking'

interface Link {
    name: string
    href: string
    badgeText?: string
}

interface LinkWithIcon extends Link {
    icon?: React.ComponentType<{ className?: string }>
}

const FOOTER_LINK_SECTIONS: { name: string; items: LinkWithIcon[] }[] = [
    {
        name: 'Products',
        items: [
            {
                name: 'Cody',
                href: '/cody',
            },
            {
                name: 'Code Search',
                href: '/code-search',
            },
        ],
    },
    {
        name: 'Enterprise',
        items: [
            {
                name: 'Cloud',
                href: '/cloud',
            },
            {
                name: 'Pricing',
                href: '/pricing',
            },
            {
                name: 'Customer stories',
                href: '/case-studies',
            },
        ],
    },
    {
        name: 'Resources',
        items: [
            {
                name: 'Blog',
                href: '/blog',
            },
            {
                name: 'Library',
                href: '/resources',
            },
            {
                name: 'Changelog',
                href: 'https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/CHANGELOG.md',
            },
            {
                name: 'Documentation',
                href: 'https://sourcegraph.com/docs',
            },
            {
                name: 'Podcast',
                href: '/podcast',
            },
            {
                name: 'Community',
                href: '/community',
            },
        ],
    },
    {
        name: 'Company',
        items: [
            {
                name: 'About',
                href: '/about',
            },
            {
                name: "Careers - We're hiring!",
                href: '/jobs',
            },
            {
                name: 'Contact',
                href: '/contact',
            },
            {
                name: 'Handbook',
                href: 'https://handbook.sourcegraph.com',
            },
            {
                name: 'Sourcegraph strategy',
                href: 'https://handbook.sourcegraph.com/company/strategy',
            },
        ],
    },
]

const SOCIAL_LINKS: LinkWithIcon[] = [
    {
        name: 'GitHub',
        href: 'https://github.com/sourcegraph',
        icon: GithubIcon,
    },
    {
        name: 'Twitter',
        href: 'https://twitter.com/sourcegraph',
        icon: TwitterIcon,
    },
    {
        name: 'Discord',
        href: 'https://discord.gg/s2qDtYGnAE',
        icon: DiscordIcon,
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/company/4803356/',
        icon: LinkedinIcon,
    },
    {
        name: 'YouTube',
        href: 'https://www.youtube.com/c/Sourcegraph/featured',
        icon: YouTubeIcon,
    },
    {
        name: 'Spotify',
        href: 'https://open.spotify.com/user/p3ntuomfda8r7czdbsgy36ogk?si=8095204aefc24587',
        icon: SpotifyIcon,
    },
]

const POSTSCRIPT_LINKS: Link[] = [
    {
        name: 'Terms',
        href: '/terms',
    },
    {
        name: 'Security',
        href: '/security',
    },
    {
        name: 'Privacy',
        href: '/terms/privacy',
    },
]

interface Props {
    minimal?: boolean
    dark?: boolean
    className?: string
}

export const Footer: React.FunctionComponent<Props> = ({ minimal, dark, className }) => {
    const year = useMemo(() => new Date().getFullYear(), [])
    return (
        <footer
            className={classNames(
                className,
                !minimal && 'pt-16 pb-2',
                dark ? 'bg-black text-white' : 'bg-gray-50 text-black',
                'z-10'
            )}
        >
            <div className="mx-auto max-w-screen-xl px-4">
                {!minimal && (
                    <div className="mb-8 flex flex-col-reverse sm:grid sm:grid-cols-12">
                        <div className="col-span-12 mt-xl sm:mt-0 sm:mb-sm lg:col-span-4 lg:mb-0">
                            <Link
                                href="/"
                                title="Sourcegraph - Universal code search"
                                data-button-style={buttonStyle.text}
                                data-button-location={buttonLocation.footer}
                                data-button-type="cta"
                            >
                                <img
                                    src={dark ? '/sourcegraph-reverse-logo.svg' : '/sourcegraph-logo.svg'}
                                    alt="Sourcegraph - Code Intelligence Platform"
                                    className="h-auto w-full max-w-[264px]"
                                    draggable={false}
                                    width={264}
                                    height={48}
                                />
                            </Link>

                            <ul className="mx-0 mt-3 flex list-none">
                                {SOCIAL_LINKS.map(({ name, href, icon: Icon }) => (
                                    <li className="mr-5" key={name}>
                                        <a
                                            href={href}
                                            target="_blank"
                                            rel="nofollow noreferrer"
                                            aria-label={name}
                                            title={name}
                                            data-button-style={buttonStyle.text}
                                            data-button-location={buttonLocation.footer}
                                            data-button-type="cta"
                                            className={classNames(
                                                'mr-3',
                                                dark
                                                    ? 'text-gray-300 hover:text-white'
                                                    : 'text-gray-400 hover:text-black'
                                            )}
                                        >
                                            {Icon && <Icon className="h-[24px] w-[24px]" />}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-span-12 sm:grid sm:grid-cols-12 lg:col-span-8">
                            {FOOTER_LINK_SECTIONS.map(({ name, items }) => (
                                <div className="mb-md sm:col-span-3 sm:mb-0" key={name}>
                                    <Heading size="h5" as="h2" className="mb-xs text-base">
                                        {name}
                                    </Heading>
                                    <ul className="ml-0 list-none">
                                        {items.map(({ name, href, icon: Icon, badgeText }) => (
                                            <li className="mb-xs max-w-[176px]" key={name}>
                                                <Link
                                                    href={href}
                                                    title={name}
                                                    data-button-style={buttonStyle.text}
                                                    data-button-location={buttonLocation.footer}
                                                    data-button-type="cta"
                                                    className={classNames(
                                                        'font-medium',
                                                        dark
                                                            ? 'text-gray-100 hover:text-white'
                                                            : 'text-gray-500 hover:text-black'
                                                    )}
                                                >
                                                    {Icon && <Icon className="mr-1 inline w-[20px] opacity-50" />}
                                                    {name}
                                                    {badgeText && (
                                                        <Badge className="ml-4" size="small" text={badgeText} />
                                                    )}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className={classNames('text-sm', { 'py-4': minimal, 'pt-sm pb-2': !minimal })}>
                    <ul className="ml-0 list-none">
                        <li
                            className={classNames('mr-lg text-gray-200 sm:inline', {
                                'text-gray-200': dark,
                                'text-gray-500': !dark,
                            })}
                        >
                            &copy; {year} Sourcegraph, Inc.
                        </li>

                        {POSTSCRIPT_LINKS.map(({ name, href }) => (
                            <li key={name} className="mt-xxs inline-block sm:mt-0">
                                <Link
                                    key={name}
                                    href={href}
                                    className={classNames('mr-5 p-0', {
                                        'text-gray-200': dark,
                                        'text-gray-500': !dark,
                                    })}
                                    title={name}
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.footer}
                                    data-button-type="cta"
                                >
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}
