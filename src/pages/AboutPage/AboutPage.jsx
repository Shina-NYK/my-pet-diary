import "./AboutPage.scss";
import myPet1 from "../../assets/images/mypet-1.jpg";
import myPet2 from "../../assets/images/mypet-2.jpg";

function AboutPage() {
    return (
        <main className="about__main">
            <section className="about__section">
                <h2 className="about__header">About My Pet Diary</h2>
                <p className="about__intro">
                    Welcome to <em>My Pet Diary</em>: a platform that offers a
                    place for animal lovers and people who love writing to
                    record the precious moments of their animal companion(s) in
                    a journal-like format. <em>My Pet Diary</em> has a
                    minimalistic design and uses muted colours with the aim of
                    offering a therapeutic experience.
                </p>
                <section className="about__idea-section">
                    <h3 className="about__idea">
                        Why <em>My Pet Diary </em>?
                    </h3>
                    <p className="about__idea-intro">
                        This application was inspired by the adorable pet
                        stories of my fellow classmates during my Software
                        Engineering journey at BrainStation and one of my family
                        members: Mumu.
                    </p>
                    <div className="about__img-wrapper">
                        <img
                            className="about__img"
                            src={myPet1}
                            alt="Belgian malinois shepherd mix puppy lying on a front door mat"
                        />
                        <img
                            className="about__img"
                            src={myPet2}
                            alt="Belgian malinois shepherd mix lying on the ground"
                        />
                    </div>
                    <p className="about__idea-details">
                        Mumu is a Belgian Malinois and German Shepherd mix. She
                        loves following my parents around the house, taking naps
                        on our kitchen floor, and roof escapades.
                    </p>
                    <p>
                        One unforgettable memory about Mumu is when her love for
                        rooftop adventures led her too close to the edge of the
                        roof, and she slipped. My dad, who was working on the
                        roof, rushed down in a panic. Luckily, she landed on a
                        pile of nets that softened the fall, emerging unscathed,
                        to our relief. Surprisingly, she wasn't scared off and
                        still eagerly enjoys her rooftop trips, healthy and
                        eager for adventure as ever.
                    </p>
                    <p className="about__idea-details about__idea-details--last">
                        What are <em className="text-bold">your</em> pet's
                        precious moments?
                    </p>
                </section>
            </section>
        </main>
    );
}

export default AboutPage;
