export const Address = () => {
    return (
        <>
            <p className="open-sans-font custom-span-contact position-relative">
                <i className="fa fa-map position-absolute"></i>
                <span className="d-block">Address Point</span>6 Odessa Street,
                Rotherhithe
            </p>
            {/* End .custom-span-contact */}

            <p className="open-sans-font custom-span-contact position-relative">
                <i className="fa fa-envelope-open position-absolute"></i>
                <span className="d-block">mail me</span>{" "}
                <a href="mailto:alex@devarno.com?subject=Hi there!">
                    alex@devarno.com
                </a>
            </p>
            {/* End .custom-span-contact */}

            <p className="open-sans-font custom-span-contact position-relative">
                <i className="fa fa-phone-square position-absolute"></i>
                <span className="d-block">call me</span>{" "}
                <a href="Tel: +216 21 184 010">+44 (0)7474 294190</a>
            </p>
            {/* End .custom-span-contact */}
        </>
    );
};
