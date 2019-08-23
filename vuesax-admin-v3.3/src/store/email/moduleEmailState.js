/*=========================================================================================
  File Name: moduleEmailState.js
  Description: Email Module State
  ----------------------------------------------------------------------------------------
  Item Name: The Key Society
  Author: Marwan Refaat
  Author URL: https://TheKeySociety.com
==========================================================================================*/


import emails from '@/views/apps/email/mails'

export default {
    mails: emails,
    mail_filter: 'inbox',
    mailTags: [
        { text: 'Personal', value : 'personal', color:"success"},
        { text: 'Company', value: 'company', color:"primary"},
        { text: 'Important', value: 'important', color:"warning"},
        { text: 'Private', value: 'private', color:"danger"},
    ],
    mailSearchQuery: '',
}