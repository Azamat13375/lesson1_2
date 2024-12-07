import Title from "../title/Title";

function About({ info }) {
    return (
        <div>
            <Title text={info.title} color="blue" />
            <p>{info.body}</p>
        </div>
    )
}

export default About;
