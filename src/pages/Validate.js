import $ from 'jquery';
import { useEffect } from 'react';

const Validate = () => {

    useEffect(() => {
        let anchor = document.createElement('a');
        anchor.href = 'https://files.smallpdf.com/files/91ddc72218132f5af172bc709fe7ecf3.pdf?name=mpdf.pdf';
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