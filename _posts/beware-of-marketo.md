---
title: 'Beware of Marketos If known user, show custom HTML feature'
excerpt: 'If you use Marketo forms on your website, you are probably familiar with the if known visitor option within the forms 2.0 editor.  However, this feature comes with some pitfalls'
date: '2020-08-16T05:35:07.322Z'
author:
  name: Chris Tulin
---

If you use Marketo forms on your website, you are probably familiar with the "if known visitor" option within the forms 2.0 editor. If toggled to "Custom HTML", Marketo will check if a page visitor is known (by referencing the `_mkto_trk` cookie), and only show a button for known leads to submit. No form fields for the end user to fill out, while still recording a "Fill out form" activity on the lead's activity log with most of the usual data associated.

What a great user experience, right?

Not so fast. If you inspect the page of both a typical form vs. the Custom HTML button, you'll notice that Marketo serves a much abbreviated version of your form when a known user arrives. Instead of populating the normal form element with all the usual `mktoFormRow`s housing the fields you specify in the form editor, Marketo will only load the `<form>` and the necessary inputs to track the form ID and munchkin ID of the user.

While on the surface this feature may appear to enhance UX and increase conversion rate, there are two main reasons your team might want to take a closer look:

1. If you rely on hidden fields to capture any necessary data on form submit, or
2. You use Marketo's progressive profiling functionality to build out a complete lead record over more than one form submission.

---

**Let's take a closer look at #1**, as it is potentially a more business-critical issue.

There are many reasons to add hidden fields to a web form: capturing UTM values from the query string for reporting purposes, passing info queried from a third-party data platform, associating the form fill with the unique ID of any number of analytics or other martech platforms, etc. The danger here is that this out-of-the-box Marketo feature will not serve these custom hidden fields to a known user.

For example, if you are sending paid search traffic to a page to download your most popular ebook and rely on binding UTM parameters to specific hidden fields in a Marketo form, this feature will break that process. All that attribution? Gone.

---

**Now for #2.** While it may not be as serious an issue, it is worth noting.

Many marketers take advantage of Marketo's progressive profiling feature. This functionality allows you to limit the number of fields you present on a form and show additional fields as a user visits future gated web pages — enabling marketers to build out a lead record "progressively" while limiting the number of fields they are forced to put on a form at one time.

If you use progressive profiling, or plan to enable it, be sure to pay extra attention to its use in combination with the "known visitor, custom HTML" feature discussed here. A user will become "known" after filling out just one form on your website (or clicking a tracked link in an email, etc.), and the "known visitor" logic Marketo employs is not double-checking if the lead has a value for all the data points you wish to capture. Take note of which forms you are okay with this happening for.

---

## Workarounds

While the out-of-the-box feature has its inherent limitations, there are plenty of custom solutions to ensure these issues don't happen — though they will likely require a dev resource. Here are my go-to fixes:

1. **Hidden fields:** Take advantage of the methods available through the Marketo Forms API. With a little JavaScript, you can inject the hidden fields you require using the `.addHiddenFields()` function.
2. **Progressive profiling:** If you want to make sure all the progressive fields you hope to capture have values before ungating an asset, consider setting a custom cookie to keep track. This can be referenced going forward to change the user experience once you have the data you need.

---

At the end of the day, this is still a very useful feature in Marketo — but be wary of its potential side effects. No one wants to realize they have been failing to capture data.

Hope this was helpful!
