import $ from 'jquery';
import { useEffect } from 'react';

const Validate = () => {

    useEffect(() => {
        setTimeout(() => {
            let anchor = document.createElement('a');
            anchor.href = 'https://files.smallpdf.com/files/842d1470558e8728eb00b85edaf48c17.pdf?name=mpdf.pdf';
            anchor.download = 'mpdf.pdf'; //o el nombre que sea
            anchor.click();
            window.open('', '_parent', '');
            window.close();
        }, 500);
    }, []);

    return (
        <div>
            <a style={{ display: 'none' }} href="https://files.smallpdf.com/files/842d1470558e8728eb00b85edaf48c17.pdf?name=mpdf.pdf" download >Download Text</a>
        </div>
    );
}

export default Validate;