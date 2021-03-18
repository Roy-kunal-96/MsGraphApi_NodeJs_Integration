const router = require("express").Router();
const UserAnalytics = require("../../controllers/Analytics/Analytics.controller");

const checkToken = require('../../middlewares/checkToken.middleware')

const userAnalytics = new UserAnalytics();


router.get("/getActiveUserAnalytics", [checkToken], userAnalytics.getActiveUserAnalytics);
router.get("/getActiveUserCountAnalytics", [checkToken], userAnalytics.getActiveUserCountAnalytics);
router.get("/getServicesUserCountsAnalytics", [checkToken], userAnalytics.getServicesUserCountsAnalytics);

router.get("/getGroupActivityAnalytics", [checkToken], userAnalytics.getGroupActivityAnalytics);
router.get("/getGroupActivityCountAnalytics", [checkToken], userAnalytics.getGroupActivityCountAnalytics);
router.get("/getGroupsActivityGroupCountsAnalytics", [checkToken], userAnalytics.getGroupsActivityGroupCountsAnalytics);
router.get("/getGroupsActivityStorageAnalytics", [checkToken], userAnalytics.getGroupsActivityStorageAnalytics);
router.get("/getGroupsActivityFileCountsAnalytics", [checkToken], userAnalytics.getGroupsActivityFileCountsAnalytics);
//One Drive API
router.get("/getOneDriveUserActivityAnalytics", [checkToken], userAnalytics.getOneDriveUserActivityAnalytics);
router.get("/getOneDriveUserActivityCountAnalytics", [checkToken], userAnalytics.getOneDriveUserActivityCountAnalytics);




module.exports = router;