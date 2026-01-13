

function Footer() {

    return (
        <footer className="bg-gray-200 text-black py-10">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} DragonBall Trackers. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;