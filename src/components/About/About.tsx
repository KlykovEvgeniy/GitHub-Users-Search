import { User } from "types/user"
import { AboutCard } from "./AboutCard";
import { ReactComponent as Location } from 'assets/icon-location.svg';
import { ReactComponent as Blog } from 'assets/icon-website.svg';
import { ReactComponent as Twitter } from 'assets/icon-twitter.svg';
import { ReactComponent as Company } from 'assets/icon-company.svg';
import './About.styled.scss'

interface AboutProps {
    user: User,
}

const monthes = 'Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep Oct, Nov, Dec'.replace(',', '').split(' ')

export const About = function ({ user }: AboutProps) {
    const date: Date = new Date(user.created_at);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    return (
        <section className="about">
            <img src={user.avatar_url} alt="avatar" />
            <div className="about__main">
                <div className="about__main-main">
                    <div className="about__data">
                        <h2>{user.name}</h2>
                        <a href={`https://github.com/${user.login}`}>@{user.login}</a>
                    </div>
                    <p className="joined">Joined {`${day} ${monthes[month]} ${year}`}</p>
                </div>
                <p className="bio">{user.bio}</p>
                <ul>
                    <li><span>Repos</span> {user.public_repos}</li>
                    <li><span>Following</span> {user.following}</li>
                    <li><span>Followers</span> {user.followers}</li>
                </ul>
                <div className="other">
                    <AboutCard Image={Location} title={user.location!} />
                    <AboutCard Image={Blog} title={user.blog!} />
                    <AboutCard Image={Twitter} title={user.twitter_username!} />
                    <AboutCard Image={Company} title={user.company!} />
                </div>
            </div>
        </section>
    )
}