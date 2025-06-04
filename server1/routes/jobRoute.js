const express = require('express');
const router = express.Router();
const { 
    createJob,
    getAllJobs,
    searchJobs,
    searchJobsByLocation,
    getFullTimeJobs,
    getContractJobs,
    getInternshipJobs,
    getLocumJobs,
    getJobById,
    getJobSalary,
    deleteJob
} = require('../controllers/jobController');
const { verifyToken } = require('../middleware/auth');

router.post('/', verifyToken, createJob);
router.get('/', getAllJobs);
router.get('/search', searchJobs);
router.get('/search/location', searchJobsByLocation);
router.get('/full-time', getFullTimeJobs);
router.get('/contract', getContractJobs);
router.get('/internship', getInternshipJobs);
router.get('/locum', getLocumJobs);
router.get('/:id', getJobById);
router.get('/:id/salary', getJobSalary);
router.delete('/:id', verifyToken, deleteJob);

module.exports = router;