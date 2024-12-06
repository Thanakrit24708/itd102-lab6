//function abc(p1,p2){ ----------parameter 
    //const a = p1+p2;
    //return a;
//}

///abc(1,2); ---------argument ไม่ใช่ callback เป็นภาษาธรรมดา

exports.home = (req,res) => {
    res.send('Home');
};

exports.about = (req,res) => {
    res.send('About');
};

exports.contact = (req,res) => {
    res.send('Contact');
};

