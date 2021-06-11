---
title: 'Beware of Marketos If known user, show custom HTML feature'
excerpt: 'If you use Marketo forms on your website, you are probably familiar with the if known visitor option within the forms 2.0 editor.  However, this feature comes with some pitfalls'
date: '2020-08-16T05:35:07.322Z'
author:
  name: Chris Tulin
---

If you use Marketo forms on your website, you are probably familiar with the ‘if known visitor’ option within the forms 2.0 editor. If toggled to ‘Custom HTML’, Marketo will check if a page visitor is known (by referencing the <code>_mkto_trk</code> cookie), and only show a button for known leads to submit. No form fields for the end user to fill out, while still recording a ‘Fill out form’ activity on the lead’s activity log with most the usual data associated.
What a great user experience right!
Not so fast… If you inspect the page of both a typical form vs. the Custom HTML button, you’ll notice that Marketo serves a much abbreviated version of your form when a known user arrives. Instead of populating the normal form element with all the usual mktoFormRow ‘s housing the fields you specify in the the form editor, Marketo will only load the <form> and the necessary input‘s to track the form ID and munchkin ID of user. While on the surface this feature may appear to enhance UX and increase conversion rate, there are two main reasons that your team might want to take a closer look:
1. If you rely on hidden fields to capture any necessary data on form submit or
2. You use Marketo’s progressive profiling functionality to build out a complete lead record over more than one form submission.
Let’s take a closer look at number 1, as it is potentially a more business critical issue. There are many reasons add hidden fields to a web form: capturing UTM values from the query string for reporting purposes, passing info queried from a third party data platform, associating the form fill with the unique ID of any number of analytics or other martech platforms, etc.. The danger here, is that this out-of-the-box Marketo feature will not serve these custom hidden fields to a known user.
For example, if you are sending paid search traffic to a page to download your most popular ebook, and rely on binding UTM parameters to specific hidden fields in a Marketo form, this feature will break that process. All that attribution? Gone!
Okay, now for number 2. While it may not be as serious an issue, I think it is worth noting. Many marketers take advantage of Marketo’s progressive profiling feature. This functionality allows you to limit the number of fields you present on a form, and show additional fields as a user visits future gated web pages. Thus, enabling marketers to build out a lead record ‘progressively’ while limiting the number of fields they are forced to put on a form at one time.
If you use progressive profiling, or plan to enable it, be sure to pay extra attention to its use in unison with the ‘known visitor, custom HTML’ feature we are discussing here. A user will become ‘known’ after filling out just one form on your website (or clicking tracked link in email etc..), and the ‘known visitor’ logic Marketo employs is not double checking if the lead has a value for all the data points you wish to capture… Take note of which forms you are okay with this happening for.
While the out-of-the-box feature may have its inherent limitations, there are (as there often are) plenty of custom solutions to ensure these issues don’t happen. However, it will likely require a dev resource. Here are my go-to fixes for the two details above (if I have time, I’ll expand here in the future):
1.	Take advantage of the methods available to you through the Marketo Forms API. With a little javascript, you can inject the hidden fields you require with the .addHiddenFields() function.
2.	If you want to make sure all the progressive fields you hope to capture have values before ungating an asset, consider setting a custom cookie to keep track. This can be referenced going forward to change the user experience once you have the data you need.
At the end of the day, this is still a very useful feature in Marketo, but be wary of its potential side effects. No one wants to come to the realization that they have been failing to capture data.
Hope this was helpful!
