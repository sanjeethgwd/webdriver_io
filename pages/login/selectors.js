class Selectors {

    get username(){ return  $('#username'); }
    get password(){ return $('#password'); }
    get submit(){ return $('[type="submit"]'); }
    get flash(){ return  $('#flash'); }

}

export default new Selectors();