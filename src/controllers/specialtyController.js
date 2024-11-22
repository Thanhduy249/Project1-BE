import specialtyServive from '../services/specialtyService';

let createSpecialty = async (req, res) => {
    try {
        let infor = await specialtyServive.createSpecialty(req.body);

        return res.status(200).json(
            infor
        )
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error server'
        })
    }
}

let getAllSpecialty = async (req, res) => {
    try {
        let infor = await specialtyServive.getAllSpecialty();
        return res.status(200).json(
            infor
        )
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error server'
        })
    }
}

let getDetailSpecialtyId = async (req, res) => {
    try {
        let infor = await specialtyServive.getDetailSpecialtyById(req.query.id, req.query.location);
        return res.status(200).json(
            infor
        )
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error server'
        })
    }
}

module.exports = {
    createSpecialty: createSpecialty,
    getAllSpecialty: getAllSpecialty,
    getDetailSpecialtyId: getDetailSpecialtyId
}