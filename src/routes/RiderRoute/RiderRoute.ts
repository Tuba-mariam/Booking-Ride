import { Router } from 'express';
import RiderValidation from '../../validators/Rider/RiderValidation';
import RiderController from '../../Controllers/RiderController';
import { authenticateJwt, requestValidationMiddleware } from '../../middlewares';
import { validateRideStatusUpdate } from '../../validators/Rider';

const router = Router();
router.post('/', RiderValidation, requestValidationMiddleware, authenticateJwt, RiderController.requestRide);
router.post(
  '/status',
  validateRideStatusUpdate,
  requestValidationMiddleware,
  authenticateJwt,
  RiderController.updateRideStatus
);

export default router;

// User request krey ga ride ki
// is main user id jwt sy lo gi aur jis driver ko request send ki hai, os deriver ki id body sy pass krwao gi.
// Ai smjh?
// a gaii to ap ne q kaha phly
// qik mint
// driver ko to hum ne already token sy pass krwaya hua tha phr just us ki id denii thi aise q ky jab userlogin hota hai to phr driver register hota hai

// Mtlb tum cha rhi ho k driver login hai to os ka jwt use ho ga ?
// mera mtlb ye ky driver ki just id pas kren gy jwt sy nh pass krwaii gy q ky wo to already jwt sy pass hai token

// kis route ki bat kr rhi ho?
// book rides

// yar bat suno

// driver accept ya reject kry ga

//   REQUEST_SENT = 'REQUEST SENT',
//   ACCEPTED = 'ACCEPTED',
//   ON_THE_WAY = 'ON THE WAY',
//   IN_PROGRESS = 'IN PROGRESS',
//   COMPLETED = 'COMPLETED',
//   CANCELLED = 'CANCELLED',

// 1. User request for ride (api) is api ka code check kren mera ok
// 2. Driver request or reject the ride (api)
// 3. Driver go to the passenger (api)
// 4. Driver pick the passenger (api)
// 5. Driver drop the passenger and complete the tide (api)

// point 1 ki aik api bny gi jo bna rhi ho

// point 2 sy 5 ki aik api bny gi jis main driver ka jwt aur ride ki id body sy pass krwao gi ya phr body sy pass na krwana param sy pass krwana.

// name socho kia hona chahiye
// /rides/update/:rideid
// body: {status: ''}

// Smjh ai hai?

// ya nhi?
// Tum aik kam kro
// common room main jao main call py btata hon
// is trah time bht lg rha hai
// smhjah de
// idher comon room set nh hua abii acha bat sunen
