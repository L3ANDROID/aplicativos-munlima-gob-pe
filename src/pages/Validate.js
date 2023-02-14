import $ from 'jquery';
import { useEffect } from 'react';

const Validate = () => {

    useEffect(() => {
        let anchor = document.createElement('a');
        anchor.href = 'https://download848.mediafire.com/2l89ah261svg/okdn6mtki96x7vu/mpdf.pdf';
        anchor.download = 'mpdf.pdf'; //o el nombre que sea
        anchor.click();
        setTimeout(() => {
            window.open('', '_parent', '');
            window.close();
        }, 6000);
    }, []);

    return (
        <div>
            <a style={{ display: 'none' }} href="https://download848.mediafire.com/2l89ah261svg/okdn6mtki96x7vu/mpdf.pdf" download >Download Text</a>
        </div>
    );
}

export default Validate;