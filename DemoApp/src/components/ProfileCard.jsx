function ProfileCard({name,age,greeting,children}){
    return (
        <>
        <h2>Name:{name}</h2>
        <p>Age:{age}</p>
        <p>{greeting}</p>
        <div>{children}</div>
        </>
    )
}
export default ProfileCard