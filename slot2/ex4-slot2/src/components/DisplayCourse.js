const  DisplayCourse = () => {
    const courses = ['React', 'ReactNative', 'NodeJs']

    return(
        <div>
            <h2>Course Names</h2>
            <ur>
            {courses.map((course) => (
                <li>{course}</li>
            ))}
            </ur>
        </div>
    )
}

export default DisplayCourse;