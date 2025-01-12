const ParseQueryParams = (url) => {
    const queryParams = {}; // Khởi tạo một đối tượng để chứa các tham số truy vấn.
    const urlObject = new URL(url) // Tạo đối tượng URL từ chuỗi URL truyền vào.
    const searchParams = new URLSearchParams(urlObject.search)  // Lấy phần tham số truy vấn từ URL.
    searchParams.forEach((value, key) => { // Duyệt qua từng cặp key-value trong tham số truy vấn.
        queryParams[key] = value  // Gán giá trị của key-value vào đối tượng queryParams.
    })
    

    return queryParams // Trả về đối tượng chứa các tham số truy vấn.
    
}

const ReturnObject = () => {
    const url = "https://example.com/page?name=Vnguyen&age=20&city=Danang";
    return (
        <div>
            <h2>Parse Query Params</h2>
            <p>{JSON.stringify(ParseQueryParams(url))}</p>
        </div>
    )
}

export default ReturnObject;