// //export const API_URL = "http://127.0.0.1:8000/api";
// // export const API_URL = "http://localhost:5000/api/v1";
// export const API_URL = "https://dev.api.peacemakerapp.com/api";
// export const KEY =
//     "YW1Gb1lXNTZZV2xpTG1GemJHRnRMbTFsYUdGeVFHZHRZV2xzTG1OdmJUb3lZV2RoYVc0PQ==";


// export const ENDPOINT = {
//     login: `${API_URL}/login`,
//     dashboard: `${API_URL}/dashboard/users-info`,
//     /*forgetpassword: `${API_URL}/auth/forgot/password`,
//     user_me: `${API_URL}/auth/me`,
//     dashboard: `${API_URL}/dashboard/users-info`,

//     admin_user: {
//         listing: `${API_URL}/admin/users`,
//         delete: {
//             url:`${API_URL}/admin/`,
//             id:null,
//         },
//         add_user: `${API_URL}/admin`,
//         edit_user: {
//             url : `${API_URL}/admin/`,
//             id  : null
//         },
//         reject: {
//             url : `${API_URL}/admin/`,
//             id  : null,
//             type: `/reject`

//         },
//         approve: {
//             url : `${API_URL}/admin/`,
//             id  : null,
//             type: `/approve`
//         }
//     },*/
// };



export const API_URL = "https://dev.api.peacemakerapp.com/api";
export const KEY = "YW1Gb1lXNTZZV2xpTG1GemJHRnRMbTFsYUdGeVFHZHRZV2xzTG1OdmJUb3lZV2RoYVc0PQ==";

export const ENDPOINT = {
  login: `${API_URL}/login`,
  dashboard: `${API_URL}/admin/dashboard`,
  challenges: `${API_URL}/admin/challenges/list`,
  guidelines: `${API_URL}/admin/guideline?name=privacy_policy`,
  guidelinesCreate: `${API_URL}/admin/guideline`,
  affirmation: `${API_URL}/admin/affirmations`,
  provider: `${API_URL}/admin/provider`,
  providerPatient: `${API_URL}/admin/provider/5`,
  sponsorship: `${API_URL}/admin/advertisement`,
  reminder: `${API_URL}/admin/advertisement`,
  userList: `${API_URL}/admin/user`,
  challenges: {
    listing: `${API_URL}/admin/challenges/list`,
    create: {
        url:`${API_URL}/admin/challenges/create`,
        id:null,
    },
},
};