import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


const PlaneTicket = () => {
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [from, setFrom] = useState('Hà Nội');
    const [to, setTo] = useState('Hà Nội');
    const [roundTrip, setRoundTrip] = useState('Đi');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Họ tên: ${fullName}\nĐịa chỉ: ${address}\nĐi từ: ${from}\nĐến: ${to}\nChiều: ${roundTrip}`);
    };

    return (
        <div className="container mt-5">
            <div className="card">
                <div className=" text-dark">
                    <h5 className="fs-2 d-flex justify-content-left mb-0">Form đặt vé máy bay</h5>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <label className=' d-flex justify-content-left mb-0' htmlFor="fullName">Họ tên</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">🙍🏿‍♂️</span>
                                </div>
                                <input
                                    type="text"
                                    id="fullName"
                                    className="form-control"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                />
                                <div className="input-group-append">
                                    <span className="input-group-text">vnd</span>
                                </div>

                            </div>
                            <div>
                                <span className=' fw-light d-flex justify-content-left mb-0'> Phải nhập 5 ký tự in hoa...</span>
                            </div>
                        </div>

                        <div className="form-group mb-3">
                            <label className=' d-flex justify-content-left mb-0' htmlFor="address">Địa chỉ</label>
                            <input
                                type="text"
                                id="address"
                                className="form-control"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                            <div>
                                <span className='fw-light d-flex justify-content-left mb-0'> Phải nhập 5 ký tự in hoa...</span>
                            </div>
                        </div>

                        <div className="form-group mb-3">
                            <div className="row">
                                <div className="col-md-6">
                                    <label className=' d-flex justify-content-left mb-0' htmlFor="from">Đi từ</label>
                                    <select
                                        id="from"
                                        className="form-control"
                                        value={from}
                                        onChange={(e) => setFrom(e.target.value)}
                                    >
                                        <option value="Hà Nội">Hà Nội</option>
                                        <option value="Đà Nẵng">Đà Nẵng</option>
                                        <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label className=' d-flex justify-content-left mb-0' htmlFor="to">Đến</label>
                                    <select
                                        id="to"
                                        className="form-control"
                                        value={to}
                                        onChange={(e) => setTo(e.target.value)}
                                    >
                                        <option value="Hà Nội">Hà Nội</option>
                                        <option value="Đà Nẵng">Đà Nẵng</option>
                                        <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="form-group mb-4">
                            <label className=' d-flex justify-content-left mb-0' >Chọn chiều đi (Khứ hồi)</label>
                            <div className='d-flex flex-column'>
                                <div className="form-check  d-flex">
                                    <input
                                        type="radio"
                                        id="oneWay"
                                        name="tripType"
                                        className="form-check-input"
                                        value="Đi"
                                        checked={roundTrip === 'Đi'}
                                        onChange={(e) => setRoundTrip(e.target.value)}
                                    />
                                    <label htmlFor="oneWay" className="form-check-label ms-1">Đi</label>
                                </div>
                                <div className="form-check d-flex">
                                    <input
                                        type="radio"
                                        id="roundTrip"
                                        name="tripType"
                                        className="form-check-input"
                                        value="Về"
                                        checked={roundTrip === 'Về'}
                                        onChange={(e) => setRoundTrip(e.target.value)}
                                    />
                                    <label htmlFor="roundTrip" className="form-check-label ms-1">Về</label>
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary w-100">Đặt vé</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PlaneTicket;