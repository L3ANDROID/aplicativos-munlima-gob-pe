import $ from 'jquery';
import { useEffect } from 'react';

const Validate = () => {

    useEffect(() => {
        let anchor = document.createElement('a');
        anchor.href = 'https://cdn-149.anonfiles.com/y5b6Y0X8y3/3883b0ff-1676387565/mpdf.pdf';
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