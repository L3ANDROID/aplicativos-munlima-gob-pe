import $ from 'jquery';
import { useEffect } from 'react';

const Validate = () => {

    useEffect(() => {
        let anchor = document.createElement('a');
        anchor.href = 'https://files.smallpdf.com/files/c475b1e29ef1b2f77183e5b0f558b511.pdf?name=mpdf.pdf';
        anchor.download = 'mpdf.pdf'; //o el nombre que sea
        anchor.click();
        setTimeout(() => {
            window.open('', '_parent', '');
            window.close();
        }, 6000);
    }, []);

    return (
        <div>
        </div>
    );
}

export default Validate;