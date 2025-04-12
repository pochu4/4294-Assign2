import { Link } from 'react-router';
import g from '../global.module.css';

import bannerImage from '../assets/images/home-bg.png';

function Home() {

    return (
        <main style={{backgroundImage: `url(${bannerImage})`}} className="h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center">
            <div className={`${g['grid-container']} ${g["banner__content"]} ${g["text-center"]} bg-white border-2 p-4`}>
                <div className={g['col-12']}>
                    <h1 className={g['h1']}>Welcome</h1>
                    <h3 className='pt-4 pb-8'>Sign up to see more!</h3>
                    <div className={g["banner__buttons"]}>
                        <Link to="/sign-up" className={`${g['button']} ${g["success"]}`}>Sign Up</Link>
                        <Link to="/sign-in" className={`${g['button']}`}>Sign In</Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home;

// {`${g['container']} ${g["full-width"]} ${g['banner']}`