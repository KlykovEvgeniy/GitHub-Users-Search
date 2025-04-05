interface AboutCardProps {
    Image: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
    title: string,
}
export const AboutCard = function ({ Image, title }: AboutCardProps) {
    return (
        <div>
            <Image />
            <span>{title ? title : 'none'}</span>
        </div>
    )
}