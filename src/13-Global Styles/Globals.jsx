// we can also add just global styles in index.css
// but there is a problem 
// if we add another style sheets with same class 
// what we get is style colision tag with 
// class name will get both styles some might be overight
// generaly speeking not good practice our elements get unpredictable 

export const Globals = () => {
    return (
        <main>
            <h1 className="title">Globals</h1>
        </main>
        
    )
}