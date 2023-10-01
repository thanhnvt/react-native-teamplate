// import branch from 'react-native-branch';
// import { LANDING_PAGE } from '../../common/constants';

// class ReferralSingleton {
//   buo: any;

//   identifier: string | undefined;

//   shortLink: string | undefined;

//   countSubscribe = 0;

//   private static instance: ReferralSingleton;

//   private constructor() {}

//   public static getInstance(): ReferralSingleton {
//     if (!ReferralSingleton.instance) {
//       ReferralSingleton.instance = new ReferralSingleton();
//     }
//     return ReferralSingleton.instance;
//   }

//   async setBuoAndGenerateShortUrlByReferralCode(code: any, userId: string) {
//     try {
//       const title = 'Liberty Carz - Discover your dream car';
//       const contentDescription =        'Liberty Carz is a digital automotive marketplace powered by Liberty Technology';
//       if (!this.buo) {
//         const branchUniversalObject = await branch.createBranchUniversalObject(
//           `referral_code${code}`,
//           {
//             locallyIndex: true,
//             title,
//             contentDescription,
//             contentImageUrl: 'https://i.imgur.com/UdlvV7T.png',
//             contentMetadata: {
//               customMetadata: {
//                 referral_code: `${code}`,
//                 '+referrer': userId,
//               },
//             },
//           },
//         );
//         const linkProperties = { feature: 'referrals', channel: 'RNApp' };
//         const controlParams = {
//           $desktop_url: LANDING_PAGE,
//         };
//         const { url } = await branchUniversalObject.generateShortUrl(
//           linkProperties,
//           controlParams,
//         );
//         this.shortLink = url;
//         this.buo = branchUniversalObject;
//         return branchUniversalObject;
//       }
//       return this.buo;
//     } catch (err) {
//       return null;
//     }
//   }

//   async showShareSheet() {
//     if (this.buo) {
//       const controlParams = {
//         $desktop_url: LANDING_PAGE,
//       };
//       await this.buo.showShareSheet(undefined, undefined, controlParams);
//     }
//     return null;
//   }

//   clearBuo() {
//     if (this.buo) {
//       this.buo.release();
//       this.buo = null;
//       this.shortLink = undefined;
//     }
//   }

//   getShortLink() {
//     return this.shortLink;
//   }

//   getCountSubscribe() {
//     return this.countSubscribe;
//   }

//   setCountSubscribe() {
//     this.countSubscribe += 1;
//   }
// }

// export default ReferralSingleton;
