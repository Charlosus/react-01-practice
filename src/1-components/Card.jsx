export const Card = () => {
    return (
        <article>
            <h2>Lego</h2>
            <img
             src='https://www.lego.com/cdn/cs/set/assets/blt8a83c30181e4401c/40179_Box1_v46.png?format=webply&fit=bounds&quality=75&width=800&height=800&dpr=1'
             alt='lego'
             width='300px'
            />
            <p> Price: $ 999</p>
        </article>
    );
};

export const Cardset = () => (
    <>
        <Card />
        <Card />
        <Card />
        <Card />
    </>
)