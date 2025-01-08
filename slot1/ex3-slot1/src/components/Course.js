const Courses = () => {
    const courses = [
        "React","ReactNative","NodeJs"
    ]
    return(
        <div>
            <h1>Courses</h1>
            {courses.map((courses) =>
                <ul>
                    <li>{courses}</li>
                </ul>
            )}
        </div>
    )
}

export default Courses;