import {Styled} from "./SocialMedia.styles"
import {faFacebook, faInstagram, faTiktok, faXTwitter} from "@fortawesome/free-brands-svg-icons";

const SocialMedias = () => {


    const socialList = [
        {
            icon: faInstagram,
            label: 'Instagram',
            link: "https://Instagram.com"
        },
        {
            icon: faFacebook,
            label: 'Facebook',
            link: "https://Facebook.com"
        },
        {
            icon: faXTwitter,
            label: 'X ( Twitter )',
            link: "https://X.com"
        },
        {
            icon: faTiktok,
            label: 'TikTok',
            link: "https://tiktok.com"
        },
    ]

    return (
        <Styled.Social__Media__Content__Holder>
            {socialList.map((social: any) => (
                <Styled.Social__Media__Anchor
                    href={social.link}
                    key={`side_media_${social.label}`}
                    target={'_blank'}
                    rel="noreferrer"
                >
                    <Styled.Social__Media__Icon
                        icon={social.icon}
                    />
                </Styled.Social__Media__Anchor>
            ))}
        </Styled.Social__Media__Content__Holder>
    )
}

export default SocialMedias