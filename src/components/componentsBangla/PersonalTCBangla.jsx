import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";

const useStyle = makeStyles((theme) => ({
  root: {
    margin: "60px 0px",
  },
  title: {
    fontSize: "1.5rem !important",
    fontWeight: "500 !important",
    marginBottom: "20px !important",
    textAlign: "center",
  },
  content: {
    fontSize: "1rem",
    marginBottom: "20px !important",
  },
  subtitle: {
    fontSize: "1rem",
    marginBottom: "20px !important",
    fontWeight: "500 !important",
  },

  icon: {
    marginRight: 10,
    position: "relative",
    top: 5,
  },
  select: {
    marginBottom: 30,
  },
  footer: {
    marginTop: "-80px",
  },
  center: {
    textAlign: "center",
  },
}));

const PersonalTC = () => {
  const classes = useStyle();

  return (
    <div>
      <Typography className={classes.title}>
        অ্যাকাউন্ট হোল্ডার নিয়ম (ব্যক্তিগত অ্যাকাউন্ট)
      </Typography>

      <p className={classes.center}>
        আপনি যদি দেশি ব্যবহারকারী হন তবে এই শর্তাবলী আপনার জন্য প্রযোজ্য।
        <br />
        গ্রাহক অ্যাকাউন্টের জন্য দেশী-এর নিবন্ধন প্রক্রিয়াটি সফলভাবে সম্পন্ন করে ও "নিয়ম ও শর্তাবলী" চেকবক্সে ক্লিক করে পড়েছেন, বুঝেছেন এবং আবদ্ধ হতে সম্মত হয়েছেন৷ আপনি যদি এই শর্তাবলীতে সম্মত না হন তবে আপনি সফটওয়্যারটি ডাউনলোড, ইনস্টল বা ব্যবহার করতে পারবেন না।
      </p>

      <h4>১। সংজ্ঞা:</h4>
      <p>
        নিম্নলিখিত শব্দ এবং অভিব্যক্তির যেখানে উপযুক্ত সংশ্লিষ্ট অর্থ থাকবে
      </p>

      <p>
        ক) "দেশী" হল আইওএস, স্মার্ট ফোন বা ট্যাব ডিভাইসে অ্যান্ড্রয়েড এবং ওয়েব সংস্করণে ব্যবহারযোগ্য একটি ই-ওয়ালেট অ্যাপ্লিকেশন। <br />
        খ) দেশীর ওয়েবসাইট https://www.deshipay.com <br />
        গ) আমরা" বা "দেশী" কে গ্রীন এবং রেড টেকনোলজিস লিমিটেড হিসাবে উল্লেখ করা হয়।{" "}
        <br />
        ঘ) "দেশী" গ্রীন এন্ড রেড টেকনোলজিস লিমিটেড এর একটি পন্য। <br />
        ঙ) "পিএসপি লাইসেন্স" হল বাংলাদেশের কেন্দ্রীয় ব্যাংক কর্তৃক ইস্যুকৃত অর্থপ্রদান পরিষেবা প্রদানকারীর লাইসেন্স। গ্রীন অ্যান্ড রেড টেকনোলজিস লিমিটেড হল একটি পিএসপি লাইসেন্সধারী যা বাংলাদেশ ব্যাংক কর্তৃক ইস্যুকৃত এবং অনুমোদিত। <br />
        চ) "ই-ওয়ালেট" বা ডিজিটাল ওয়ালেট মানে এমন একটি মোবাইল বা অনলাইন ভিত্তিক অ্যাপ যেখানে ব্যবহারকারী নিরাপদে তাদের অর্থ ইলেকট্রনিকভাবে ধারণ করে বা রক্ষণাবেক্ষণ করে। <br />
        ছ) "ই-ওয়ালেট হোল্ডার" মানে সেই ব্যক্তি বা ব্যবসা/মার্চেন্ট যিনি দেশি ই-ওয়ালেটের মালিক৷ <br />
        জ) "ডিভাইস আইডি" মানে আঙ্গুলের ছাপ বা পিন বা প্যাটার্ন যা ডিভাইস ব্যবহারকারী দ্বারা তৈরি করা হয়, যা বৈধ ব্যবহারকারীকে শনাক্ত করতে ব্যবহার করা যেতে পারে। দেশি ই-ওয়ালেট অ্যাক্সেস করার জন্য এটি ব্যবহারকারীর পরিচয় হিসাবে ব্যবহার করা যেতে পারে। <br />
        ঝ) "মোবাইল ফোন নম্বর" বলতে দেশি ই-ওয়ালেট নিবন্ধন করার জন্য ব্যবহৃত মোবাইল নম্বরকে বোঝায় যা অ্যাকাউন্টধারীর দ্বারা ই-ওয়ালেটে লগইন করার জন্য ব্যবহারকারীর নাম হিসাবেও ব্যবহার করা হবে। <br />
        ঞ) "OTP" মানে ওয়ান টাইম পাসওয়ার্ড, যা মোবাইল এবং ওয়েব অ্যাপ দ্বারা প্রদত্ত একটি লেনদেন/ক্রিয়াকলাপ অনুমোদন করতে ব্যবহৃত হয়। <br />
        ট) লেনদেনে কোন কিছু ভুল হলে “Oops” বার্তাটি প্রদর্শন করবে। <br />
        ঠ) "পাসওয়ার্ড" হল অক্ষরের একটি নিরাপত্তা ধারা যা ব্যবহারকারীদের ব্যক্তিগত দেশি ওয়ালেট অ্যাকাউন্টে অ্যাক্সেসের অনুমতি দেয়। <br />
        ড) "পিন" মানে ই-ওয়ালেট পরিষেবার জন্য ৬ সংখ্যার ব্যক্তিগত শনাক্তকরণ নম্বর (পাসওয়ার্ড)। <br />
        ঢ) "পণ্য" মানে ই-ওয়ালেট ধারককে দেওয়া ই-ওয়ালেট পরিষেবা। <br />
        ণ) অর্থপ্রদান, অর্থগ্রহন, অর্থপ্রদানের স্বীকৃতি, অর্থপ্রত্যাহার এবং অর্থ স্থানান্তরের পদ্ধতিগুলোই হল লেনদেন। <br />
        ত) "QR কোড" (দ্রুত প্রতিক্রিয়া কোড) মানে হল এক ধরনের 2D বার কোড যাতে মার্চেন্ট বা ব্যক্তিদের পরিচয়পত্র রয়েছে যা স্মার্টফোনের মাধ্যমে তথ্যে সহজে অ্যাক্সেস প্রদান করতে ব্যবহৃত হয়। <br />
      </p>

      <h4>২। শর্তাবলীর প্রযোজ্যতা</h4>
      <p>
        পরিষেবার নিয়ম ও শর্তাবলী সঠিকভাবে না বুঝে এবং সম্মত না হয়ে কেউ দেশি ই-ওয়ালেট ব্যবহার করার অধিকারী নয়। দেশি ই-ওয়ালেট ব্যবহার করে, আপনি এই নিয়ম ও শর্তাবলীতে সম্মত হন এবং সম্মতি দেন, যা আপনার এবং দেশীর মধ্যে চুক্তি গঠন করে। দেশি এই ধরনের বিদ্যমান শর্তাবলী এবং সময়ে সময়ে করা সংশোধনী দ্বারা পরিচালিত হবে। এই শর্তাবলী মার্চেন্ট এবং/অথবা সংশ্লিষ্ট পণ্য বা দেশী দ্বারা প্রদত্ত পরিষেবার সাথে সম্পর্কিত অন্যান্য শর্তাবলীর সাথে এবং অন্যথায় নির্দিষ্টভাবে বলা না থাকলে তার সাথে থাকবে না। এই শর্তাবলী এবং দেশি দ্বারা করা আরও সংশোধনগুলির মধ্যে কোনও বিরোধের ক্ষেত্রে, পরবর্তী সংশোধনগুলি অগ্রাধিকার পাবে৷
      </p>

      <h4>৩। সাধারণ ব্যবসার নিয়ম</h4>

      <p>
        ব্যক্তিগত ই-ওয়ালেট ইস্যু দেশী নীতি দ্বারা পরিচালিত হয়। নিম্নলিখিত ব্যবসার নিয়মগুলি আপনার ব্যক্তিগত অ্যাকাউন্টে প্রযোজ্য হবে।
      </p>

      <p>
        ক) ই-ওয়ালেটটি "অ-হস্তান্তরযোগ্য"। <br />
        খ) ই-ওয়ালেটে বিদ্যমান ব্যালেন্সের উপর কোন সুদ প্রদেয় হবে না।{" "}
        <br />
        গ) ই-ওয়ালেটটি ব্যবহারের জন্য আবেদনকারীর অবশ্যই বৈধ মোবাইল নম্বর, ফটো আইডেন্টিটি প্রুফ (এনআইডি) ১৮ বছরের বেশি বয়সী, বিদ্যুৎ বিল ফর্মের মাধ্যমে ঠিকানা এবং বাংলাদেশের একটি শিডিউল ব্যাংক বা এমএফএস অ্যাকাউন্ট সহ একটি ব্যাংক অ্যাকাউন্ট থাকতে হবে।
        <br />
        ঘ) এই মর্মে আপনাকে সম্মতি থাকতে হবে যে আপনার শুধুমাত্র একটি ব্যক্তিগত অ্যাকাউন্ট থাকতে পারে। আপনি দেশির সাথে আপনার একটি ব্যক্তিগত অ্যাকাউন্টের বেশি আর কোনো দেশি অ্যাকাউন্ট তৈরি করার কোনো চেষ্টা করবেন না।
        <br />
        ঙ) সংযুক্তি ‘ক’ তে লেনদেনের পরিসীমা বিদ্যমান আছে।
        <br />
        চ) পরপর তিনটি ব্যর্থ লগইন প্রচেষ্টা সাময়িকভাবে আপনার অ্যাকাউন্ট ব্লক হতে পারে যদি না আপনি আপনার পাসওয়ার্ড রিসেট করেন। আপনি প্রদত্ত নির্দেশাবলী এবং নির্দেশিকা ব্যবহার করে দেশী থেকে আপনার পাসওয়ার্ড রিসেট করতে পারেন।
        <br />
        ছ) ব্যবসায়িক নিয়ম বা প্রক্রিয়াগুলির যে কোনও পরিবর্তন দেশির ওয়েবসাইটে অবহিত করা হবে এবং এটি আপনার জন্য যথেষ্ট নোটিশ হিসাবে বিবেচিত হবে এবং তাই নতুন নিয়মগুলি আর কোনও বিজ্ঞপ্তি ছাড়াই আপনার উপর বাধ্যতামূলক হবে। অন্য কোন মিডিয়ার মাধ্যমে আর কোন নোটিশ প্রদান করা হবে না।
        <br />
        <br />
        জ) দেশি কোনো কারণ ব্যাখ্যা ছাড়াই আপনার অনুরোধ প্রত্যাখ্যান করার অধিকার সংরক্ষণ করে।
        <br />
        ঝ) দেশি কোনো অব্যবহৃত অ্যাকাউন্ট শূন্য লেনদেনের জন্য নিষ্ক্রিয় করতে পারে, যদি আপনি এটি ০১ (এক) বছরের বেশি সময় ধরে প্রবেশ না করে থাকেন এবং এটিকে সুপ্ত ই-ওয়ালেট/লিমিটেড ই-ওয়ালেট বলা হবে। ই-ওয়ালেট সুপ্ত থাকার পরবর্তী ০১ (এক) মাসের মধ্যে পুনরায় সক্রিয় না হলে অ্যাকাউন্টটি নিষ্ক্রিয় করা হবে। অ্যাকাউন্টে থাকা ব্যালেন্স দেশির কাছে একটি আলাদা অ্যাকাউন্টে থাকবে এবং আপনি তার জন্য নির্ধারিত পদ্ধতি অনুসারে স্থগিত/সুপ্ত ই-ওয়ালেট পুনরায় সক্রিয় করতে পারেন।
        <br />
        ঞ) নির্ধারিত পদ্ধতি অনুসরন করে আপনি ই-ওয়ালেট বন্ধ করার জন্য অনুরোধ করতে পারেন।
        <br />
        ট) দেশির কাছে যেকোনো বাতিলকরণের অনুরোধ নিশ্চিত করার আগে ই-ওয়ালেটে সমস্ত লেনদেন, লেনদেন সংক্রান্ত বিরোধ বা বকেয়া ফিগুলির জন্য আপনি দায়বদ্ধ থাকবেন।
        <br />
        ঠ) ই-ওয়ালেট সীমিত বা বন্ধ করার জন্য একটি যুক্তিসঙ্গত নোটিশ দেওয়ার জন্য দেশির প্রচেষ্টা থাকবে, তবে দেশি তার নিজস্ব বিবেচনার সীমাতে সাময়িকভাবে বা ই-ওয়ালেটটি সম্পূর্ণ বা আংশিকভাবে, যে কোনো সময় আপনাকে পূর্ব নোটিশ না দিয়ে বন্ধ করতে পারে।
        <br />
        ড) কোনও জরুরী বা নিরাপত্তারজনিত কারনে হার্ডওয়্যার/সফ্টওয়্যারের যেকোন বিচ্ছেদ, রক্ষণাবেক্ষণ বা মেরামতের কাজের জন্য ও পূর্বনোটিশ ছাড়াই দেশি কর্তৃপক্ষ যেকোন সমইয়ে ই-ওয়ালেটটি সুপ্ত বা সীমিত করতে পারে।
        <br />
        ঢ) যদি আপনি দেশী দ্বারা নির্ধারিত কোন শর্তাবলী কোন কারণে লঙ্ঘন করেন তবে দেশি পূর্ব নোটিশ ছাড়াই ই-ওয়ালেটের অধীনে পরিষেবাগুলি বন্ধ বা স্থগিত বা সীমিত করতে পারে।
      </p>

      <h4>৪। পণ্যের ব্যবহার</h4>

      <p>সকল শর্তাবলি স্বীকার করেঃ</p>

      <p>
        ক) আপনি এমন কোনো কার্যকলাপ করবেন না যা দেশি অ্যাপ বা দেশি দ্বারা প্রদত্ত কোনো পরিষেবাকে বাধাগ্রস্ত করতে পারে। <br />
        খ) আপনি মানি লন্ডারিং প্রতিরোধ আইন, ২০১২ এবং সন্ত্রাসবিরোধী আইন, ২০০৯ এর প্রয়োজনীয় নির্দেশিকা এবং বাংলাদেশের অন্যান্য সমস্ত প্রাসঙ্গিক আইন, বাংলাদেশ ব্যাংকের নির্দেশাবলী, প্রবিধান, নির্দেশিকা এবং প্রযোজ্য সার্কুলারগুলি মেনে চলবেন। আপনি আরও স্বীকার করেন যে আপনি কোনও নিষিদ্ধ কার্যকলাপ, বেআইনি কার্যকলাপ বা লেনদেন পরিচালনা করে দেশীর পরিষেবার অপব্যবহার করবেন না। <br />
        গ) পাসওয়ার্ড, লেনদেনের পিন বা আঙুলের ছাপ এবং ওটিপি ব্যবহার করে গৃহীত সমস্ত লেনদেন/পরিষেবার জন্য দেশীকে অনুমোদন করুন।
        <br />
        ঘ) আপনি দেশী অ্যাপটি শুধুমাত্র সেই উদ্দেশ্যেই ব্যবহার করবেন যে উদ্দেশ্যে এটি ব্যবহার করা হবে।
        <br />
        ঙ) দেশি দ্বারা প্রদত্ত পরিষেবার ক্ষতি করার চেষ্টা করবেন না।
        <br />
        চ) এখানে থাকা সকল শর্তাবলি মেনে পিন ব্যবহার করে পণ্যের অধীনে প্রদত্ত পরিষেবাগুলিকে দেশি দ্বারা সময়ে সময়ে নির্ধারিত পদ্ধতি অনুসারে ব্যবহার করতে সম্মত হন, এখানে থাকা শর্তাবলী সহ।
        <br />
        ছ) পিন এবং ওটিপি গোপন রাখতে সম্মত হন এবং অন্য কোনও ব্যক্তির কাছে এগুলি প্রকাশ করবেন না বা সেগুলিকে এমনভাবে রেকর্ড করবেন না যা গোপনীয়তা বা পরিষেবার সুরক্ষার সাথে আপস করবে৷
        <br />
        জ) বাংলাদেশ ব্যাংক দ্বারা নির্ধারিত সীমার মধ্যে দেশী ই-ওয়ালেট এর পিন/ওটিপি ব্যবহার করে লেনদেন করতে সচেতন হতে হবে।
        <br />
        ঝ) গ্রীন অ্যান্ড রেড টেকনোলজিস লিমিটেডের (দেশী) কর্মকর্তা সহ কারো কাছে আপনার পিন, ওটিপি বা কার্ডের পিন প্রকাশ করবেন না বলে সম্মত হন। লেনদেনটি আপনি বা অন্য কেউ করেছেন তা নির্বিশেষে আপনার অ্যাকাউন্টের মাধ্যমে করা যেকোনো লেনদেনের জন্য আপনি দায়ী থাকবেন।
        <br />
        ঞ) মোবাইল ফোন বা ওয়েব অ্যাপ ব্যবহার করে সকল লেনদেনগুলি প্রত্যাহারযোগ্য নয়৷
        <br />
        ট) বোঝুন এবং স্পষ্টভাবে সম্মত হন যে বাংলাদেশ ব্যাংক দ্বারা নির্ধারিত সর্বোচ্চ সীমা এবং সময়ে সময়ে চার্জগুলি সংশোধন করার সম্পূর্ণ অধিকার দেশীর রয়েছে যা আপনার জন্য বাধ্যতামূলক হবে।
        <br />
        ঠ) দেশির মাধ্যমে সমস্ত লেনদেন হবে বাংলাদেশী মুদ্রায়।
        <br />
        ড) সঠিকভাবে এবং বৈধভাবে নিবন্ধিত আপনার পণ্যটি ব্যবহার করতে সম্মত হন এবং ওয়ালেটটি শুধুমাত্র মোবাইল ফোন নম্বরের মাধ্যমে বা অনলাইনের মাধ্যমে ব্যবহার করার প্রতিশ্রুতি নিন যা ই-ওয়ালেটের জন্য নিবন্ধন করতে ব্যবহৃত হয়েছে।
        <br />
        ঢ) আপনার নিবন্ধিত নম্বর থেকে প্রাপ্ত এবং PIN/OTP-এর মাধ্যমে প্রমাণীকৃত সমস্ত অনুরোধ, লেনদেন সম্পাদন করার জন্য দেশীকে স্পষ্টভাবে অনুমোদন করুন। অর্থ যোগ করা, টাকা পাঠানো, মোবাইল রিচার্জ, বিল পেমেন্ট, ক্রয়, ব্যাঙ্কে স্থানান্তর ইত্যাদির মতো অর্থপ্রদানের সুবিধার ক্ষেত্রে, আপনার অ্যাকাউন্ট থেকে একটি অনুরোধ প্রাপ্ত হলে আপনাকে অর্থ প্রদানের জন্য স্পষ্টভাবে অনুমোদিত দেশী ই-ওয়ালেট বলে গণ্য করা হবে।
        <br />
        ণ) স্বীকার করুন যে আপনার নিবন্ধিত নম্বর থেকে অস্বাভাবিক যেকোনো বৈধ লেনদেন আপনার দ্বারা শুরু হয়েছে বলে ধরে নেওয়া হবে এবং PIN/OTP দ্বারা অনুমোদিত যে কোনো লেনদেন আপনার দ্বারা যথাযথভাবে এবং আইনত অনুমোদিত।
        <br />
        ত) প্রদত্ত পরিষেবাগুলির সাথে সম্পর্কিত যে কোনও তথ্য পরিবর্তন সম্পর্কে নিজেকে আপডেট রাখতে সম্মত হন যা দেশির ওয়েবসাইটে প্রচার করা হবে বা পণ্যটি ব্যবহার করার ক্ষেত্রে দেশি অ্যাপে প্রেরিত বিজ্ঞপ্তি এবং জাতীয় তথ্য পরিবর্তনগুলির নোট সম্মতির জন্য দায়ী থাকবে।
        <br />
        থ) আপনি কোন বেআইনি উদ্দেশ্যে দেশি পরিষেবাগুলি ব্যবহার করবেন না এবং আপনার দেশি অ্যাকাউন্ট ব্যবহার করে যে কোনও অবৈধ কার্যকলাপের জন্য দায়ী থাকবেন।
        <br />
        দ) আপনি আপনার ডিভাইসে এই অ্যাপটির সঠিক সংস্করণ ডাউনলোড এবং ইনস্টল করেছেন কিনা তা পরীক্ষা করা এবং নিশ্চিত করা আপনার দায়িত্ব। আপনার কোনো সামঞ্জস্যপূর্ণ ডিভাইস না থাকলে বা আপনি যদি আপনার ডিভাইসে অ্যাপটির জাল সংস্করণ ডাউনলোড করে থাকেন তাহলে দেশী পে দায়ী থাকবে না।
        <br />
        ধ) আপনার দেওয়া সমস্ত তথ্য সত্য এবং নির্ভুল।
      </p>

      <h4>৫। পাসওয়ার্ড নীতি</h4>
      <p>
        {" "}
        ক) পাসওয়ার্ডের নিম্নলিখিত বৈশিষ্ট্য থাকতে হবে: <br />• সর্বাধিক দৈর্ঘ্য পনের ১৫ অক্ষরের বেশি হতে পারে না <br />
        • ন্যূনতম দৈর্ঘ্য অবশ্যই আট (৮) অক্ষর হতে হবে <br />
        • কমপক্ষে একটি (১) সংখ্যা <br />
        • কমপক্ষে একটি (১) ছোট হাতের অক্ষর। <br />
        • অন্তত একটি ইউনিক সাইন। <br />
        খ) ভুল পাসওয়ার্ড দিয়ে ৩টি ব্যর্থ প্রচেষ্টার ক্ষেত্রে, আপনি আপনার পাসওয়ার্ড পুনরায় সেট না করলে আপনার অ্যাকাউন্ট অ্যাক্সেস লক করা হবে। <br />
        গ) পাসওয়ার্ড সুরক্ষা মানদন্ড <br />
        ঘ) ইমেল বার্তা বা ইলেকট্রনিক যোগাযোগের অন্যান্য ফর্মগুলিতে পাসওয়ার্ডগুলি ঢোকানো উচিত নয়৷ <br />
        ঙ) পাসওয়ার্ড পরিবর্তনের ক্ষেত্রে, নতুন পাসওয়ার্ড পূর্বে ব্যবহৃত চারটি পাসওয়ার্ডের মতো হতে পারে না। <br />
        চ) দেশি অ্যাকাউন্টের জন্য পূর্বে ব্যবহৃত পাসওয়ার্ড ব্যবহার করবেন না। পাসওয়ার্ড হল কেস সংবেদনশীল এবং গোপনীয় দেশি তথ্য। <br />
        এখানে পাসওয়ার্ড এর ব্যাপারে কি কি "করবেন না" এর একটি তালিকা রয়েছে: <br />
        • ইমেলের মাধ্যমে আপনার পাসওয়ার্ড পাঠাবেন না। <br />
        • অন্যদের সামনে কথা বলবেন না/পাসওয়ার্ড টাইপ করবেন না। <br />
        • অনুগ্রহ করে সব সময় আপনার পাসওয়ার্ড গোপন রাখুন। <br />• যদি আপনি মনে করেন যে আপনার পাসওয়ার্ড আপোস করা হয়েছে, অনুগ্রহ করে পাসওয়ার্ড পরিবর্তন করুন বা আপনার অ্যাকাউন্ট ব্লক করতে আমাদের গ্রাহক পরিষেবাতে কল করুন। <br />
        • এমনকি আমাদের কল সেন্টারেও কাউকে পাসওয়ার্ড জানাবেন না।
      </p>

      <h4>৬। পরিচয় প্রমাণীকরণ (KYC)</h4>
      <p>
        a) It is mandatory that we follow strict guideline of Bangladesh Bank
        for KYC. Hence, you are authorizing Deshi to make any inquiry we
        consider necessary to validate your identity. This may include asking
        you the following documents/information-
      </p>
      <p>
        I. Name; <br />
        II. Father’s name; <br />
        III. Mother’s name; <br />
        IV. Address; <br />
        V. National Identification Document (NID); <br />
        VI. Passport; <br />
        VII. Photo; <br />
        VIII. Mobile Number; <br />
        IX. Driving License; <br />
        X. Tax Identification Number (TIN); <br />
        XI. Bank account details; <br />
        XII. Details of Credit card/Debit Card/Bank
        card/Visa/Mastercard/American Express; <br />
        XIII. E-mail Address; <br />
        XIV. Business or entity name; <br />
        XV. Registration and/or incorporation number of the business; <br />
        XVI. Trade License of the Business; <br />
        XVII. Details about any persons in the business including proprietor,
        shareholder, director, partner, or any other persons as may be required;{" "}
        <br />
        XVIII. Details about any licenses or permits of the business; <br />
        XIX. Address of the business; and/or <br />
        XX. Any further documents and information as may be required by Deshi
      </p>
      <p>
        b) You must not provide any false, inaccurate, incomplete or misleading
        information. <br />
        c) You are responsible for ensuring that your registration details are
        maintained up to date. <br />
        d) Deshi may reject your application at its discretion if any of the
        account opening requirements are not met or if you fail to provide us
        with satisfactory proof of identification. <br />
        e) Deshi reserves the right to request further information pertaining to
        your account at any time failure to which may result in limitation on
        usage of the Deshi Service, suspension or termination of the account.
      </p>

      <h4>৭। অ্যাকাউন্ট ব্যবহার</h4>
      <p>
        ক) KYC তথ্য প্রদান করার পরে, এমনকি আপনার অ্যাকাউন্টের অনুমোদনের আগে, আপনি আপনার দেশী অ্যাকাউন্টে টাকা পেতে সক্ষম হবেন। <br />
        খ) অ্যাকাউন্ট যাচাইকরণ এবং অনুমোদনের পরে, আপনি দেশি দ্বারা প্রদত্ত সমস্ত পরিষেবা পেতে সক্ষম হবেন। <br />
        গ) দেশি ওয়্যারেন্টি দেয় না যে সমস্ত কার্যকারিতা সর্বদা উপলব্ধ থাকবে এবং নতুন বা সংশোধিত আইন, সংবিধিবদ্ধ উপকরণ, সরকারী প্রবিধান বা নীতি বা অন্য কোন বাধ্যতামূলক কারণের প্রত্যক্ষ ফলাফল হিসাবে সাধারণভাবে কোন কার্যকারিতা বা দেশী পরিষেবা যেকোন পূর্ব বিজ্ঞপ্তি প্রত্যাহার করতে পারে। <br />
        ঘ) দেশি আর্থিক প্রতিষ্ঠানের প্ল্যাটফর্ম এবং আপনাকে নির্দিষ্ট পরিষেবা প্রদানকারী অন্যান্য সংস্থাগুলির সাথে একীকরণের পরে দেশি মেনুতে অতিরিক্ত কার্যকারিতা প্রদান করতে পারে। এই ধরনের কার্যকারিতা আপনাকে আর্থিক প্রতিষ্ঠান বা অন্যান্য সত্তার প্ল্যাটফর্মে সীমিত অ্যাক্সেস দিতে পারে। অন্যান্য প্ল্যাটফর্মগুলিতে অ্যাক্সেস পাওয়ার জন্য এই ধরনের কার্যকারিতা ব্যবহার করে, আপনি এতদ্বারা দেশীকে ক্ষতিপূরণ দিতে সম্মত হন এবং এই ধরনের বাহ্যিক প্ল্যাটফর্মগুলিতে আপনার অ্যাক্সেস থেকে উদ্ভূত যে কোনও ক্ষতি থেকে দেশীকে ক্ষতিমুক্ত রাখতে সম্মত হন। <br />
        ঙ) দেশি সময়ে সময়ে মোবাইল আর্থিক পরিষেবাগুলি পাওয়ার জন্য সমস্ত পরিষেবা ফি এবং/অথবা রক্ষণাবেক্ষণ চার্জ (অন্যান্য প্রযোজ্য চার্জ সহ) নির্ধারণ করার অধিকার সংরক্ষণ করে৷ উপরন্তু, দেশী কোনো পূর্ব বিজ্ঞপ্তি ছাড়াই তার পরিষেবা ফি এবং চার্জের কোনো বৃদ্ধি নির্ধারণ করার অধিকার সংরক্ষণ করে।
      </p>
      <h4>৮। লিংক ব্যাংক</h4>
      <p>লেনদেনের ফি সংযুক্তি (বি) হিসাবে যোগ করা হয়েছে৷</p>
      <p>
        ক) ভুল ব্যাংক বা কেওয়াইসি তথ্যের কারণে বা ব্যাংক অ্যাকাউন্টের সাথে অমিলের কারণে আপনার লিংক ব্যাংকের অনুরোধ ব্যর্থ হলে দেশীকে দায়বদ্ধ করা হবে না উপরন্তু, লেনদেনের ত্রুটির কারণে যে কোনও ভুল ব্যবস্থাপনার জন্য দেশী দায়বদ্ধ থাকবে না ব্যাংক বা আপনার ডিভাইস বা ইন্টারনেট সমস্যা। <br />
        খ) আপনার দেশি অ্যাকাউন্টের সাথে আপনার ব্যাংক অ্যাকাউন্ট লিংক করতে, আপনাকে ব্যাংক তালিকা থেকে আপনার ব্যাংক নির্বাচন করতে হবে এবং আপনার ব্যাংক অ্যাকাউন্টের তথ্য সঠিকভাবে সন্নিবেশ করাতে হবে। <br />
        গ) "লিংক ব্যাংক"-এর অনুরোধ শুরু করে এবং কেওয়াইসি তথ্য প্রদান করে, আপনি এতদ্বারা গ্রীন অ্যান্ড রেড টেকনোলজিস লিমিটেড (দেশী) কে আপনার নির্বাচিত ব্যাংকের সাথে আপনার কেওয়াইসি তথ্য শেয়ার করার জন্য অনুমোদন দিচ্ছেন যাতে আপনার তথ্যের সাথে মিলিত হতে পারে উভয় অ্যাকাউন্টই আপনার মালিকানাধীন তা যাচাই করার জন্য ব্যাংক অ্যাকাউন্ট। এই ধরনের যাচাইকরণ ছাড়া, দেশী অ্যাকাউন্টের সাথে ব্যাংক অ্যাকাউন্টের লিঙ্কিং প্রক্রিয়া সম্পূর্ণ হবে না। <br />
        ঘ) "লিংক ব্যাংক"-এর অনুরোধ শুরু করে এবং KYC তথ্য প্রদান করে, আপনি এতদ্বারা গ্রীন অ্যান্ড রেড টেকনোলজিস লিমিটেড (দেশী) কে আপনার নির্বাচিত ব্যাংকের সাথে আপনার কেওয়াইসি তথ্য শেয়ার করার জন্য অনুমোদন দিচ্ছেন যাতে আপনার তথ্যের সাথে মেলানো যায়। উভয় অ্যাকাউন্টই আপনার মালিকানাধীন তা যাচাই করার জন্য ব্যাংক অ্যাকাউন্ট। এই ধরনের যাচাইকরণ ছাড়া, দেশী অ্যাকাউন্টের সাথে ব্যাংক অ্যাকাউন্টের লিঙ্কিং প্রক্রিয়া সম্পূর্ণ হবে না। <br />
        e) During the process of link bank, you will be redirected to your
        bank’s Internet Banking page where you have to follow bank’s instruction
        or if your bank doesn’t have Internet banking an OTP will be sent to
        your bank registered mobile number for the purpose of authentication.
        You have to enter the OTP and the link will be established. <br />
        f) You shall abide by any further burden or obligation if the bank or
        any other government authority provides any such obligation upon you.{" "}
        <br />
        g) Deshi reserves the right to add, remove and modify the existing terms
        and conditions for this service at any time as necessary without giving
        any prior notice. <br />
        h) By linking your bank account to Deshi account you hereby also
        authorize Green and Red Technologies Limited (Deshi) to debit or credit
        your linked Bank Account through the settlement bank of Deshi eWallet.{" "}
        <br />
        i) Once the link is established, you are able to add money from your
        linked bank account to your Deshi account or you can transfer money from
        your Deshi account to your linked bank account. <br />
        j) In case of non-delivery of OTP, pending Add Money or any other issue
        associated with your Bank account or service, you are required to
        contact your Bank. <br />
        k) In case of any issue associated with Deshi account, you are requested
        to contact Deshi Customer Care Center by calling 0000000, by sending
        e-mail to support@deshipay.com, by raising a ticket or by live chat from
        our application.
      </p>
      <h4>9. Services Given by Third Party Networks</h4>
      <p>
        In case of any transaction through third party network, the mentioned
        party will solely be liable for the accuracy and authenticity of the
        information related to their services given by them. Deshi is a payment
        service provider only and in no way liable for the accuracy and
        authenticity of their services. If you want to return a purchase or want
        to refund it will be followed by the third party’s prescribed terms and
        conditions. For Third Party service-related queries, please contact with
        the party or their authorized representatives in addition, Deshi will
        not be liable for any promotional offers or deals offered by such third
        parties.
      </p>

      <h4>10. Transactions through Deshi</h4>
      <p>
        a) Your Transaction request through Deshi may not be completed: <br />
        i. If you have insufficient funds in your Deshi account to complete a
        Transaction or to cover the charges for a transaction; <br />
        ii. If you have reached the maximum account balance limit prescribed by
        Bangladesh Bank; <br />
        iii. If you have reached the daily limit prescribed by Bangladesh Bank;{" "}
        <br />
        iv. If your Account has been temporarily suspended or permanently
        frozen; <br />
        v. If there is any other compelling reason such as temporary system
        delay or outage. <br />
        vi. If your transaction seems suspicious to Deshi for any reason
        whatsoever; at the discretion of Deshi. <br />
        b) In case of Add Money transaction, we will be able to add money from
        banks available in Deshi list or any VISA/Master/UnionPay debit or
        credit card. <br />
        c) You are required to enter correct OTP received from your issuer bank
        through your bank registered mobile number for the purpose of Adding
        Money to your Deshi account. <br />
        d) Green and Red Technologies Limited (Deshi) shall not be liable for
        any Add Money being rejected by the system for the
        mistake/non-compliance of rules by you. <br />
        e) In case of transfer money to your bank account or credit card bill
        payment, you will be able to transfer money to any bank account or any
        VISA/Master/UnionPay debit or credit card. <br />
        f) It may take up to 2 working days to complete the transfer money
        process to a bank account or credit card bill payment. <br />
        g) Green and Red Technologies Limited (Deshi) shall not be liable for
        any delay by your Bank to credit your Bank account through Transfer
        Money. <br />
        h) You are required to enter correct OTP or your transaction PIN of
        Deshi (if required) to complete a transaction. <br />
        i) It is your responsibility to ensure that the status of the concerned
        Bank/card Account is active (is not frozen, dormant, or others) and
        transactions are allowed in the concerned Bank Account. Deshi shall not
        be liable for any unsuccessful transaction due to the status of the
        Bank/card account and neither does Deshi have any responsibility to
        communicate with the bank to secure any transaction. <br />
        j) Deshi may cancel or reverse any transaction or debit your Deshi
        account to correct any mistake, overpayment, or for any other reasonable
        grounds after proper investigation. If such cancelation, reversal, or
        debit is made by Deshi, you will be duly notified. <br />
        k) You are bound to bear the fees/charges (if any) imposed by Deshi
        which may vary from time to time for the services rendered. <br />
        l) You must ensure confidentiality, custody, and protection of the PIN
        of your Deshi Account and the OTP provided by bank and/or Deshi. Deshi
        shall not be held accountable for any consequences in case PIN, OTP or
        the Deshi account is compromised by you. <br />
        m) In case of non-delivery of OTP, pending Add Money or any other issue
        associated with your Bank account or service, you are required to
        contact your Bank. <br />
        n) You must ensure confidentiality, custody, and protection of the PIN
        of your Deshi Account and the OTP provided by bank and/or Deshi. Deshi
        shall not be held accountable for any consequences in case PIN, OTP or
        the Deshi account is compromised by you. <br />
        o) A Transaction once completed is final and irrevocable. As such, Deshi
        shall not be under any compulsion to reverse any transaction. Therefore,
        you should ensure that the correct bank/card/Deshi account details are
        entered while performing the transaction. <br />
        p) Deshi will not be compelled to refund or compensate the sender if the
        fund is sent to a recipient mistakenly or in error or fraudulently or
        under duress or otherwise spent by the recipient of the mistaken,
        erroneous or fraudulent transaction and you hereby agree to hold Deshi
        harmless for any losses arising from a mistaken, erroneous or fraudulent
        transfer of funds or any transfer of funds from your account effected
        under duress or under coercion or criminal force. <br />
        q) You may withdraw your money at participating ATM network Outlets at
        any time by accessing your Deshi Account by generating an ATM Cashout
        token. It will be a one-time token which should be cashed at
        participating ATM networks within the prescribed timeframe. Failure to
        do so will cause the token to expire and fund will be reversed to your
        wallet balance. <br />
        r) You are required to contact your Bank, in case of any issue
        associated with your Bank account or service. <br />
        s) In case of any issue associated with Deshi account, you are requested
        to contact Deshi Customer Care Center by calling 000000, by sending
        e-mail to support@deshipay.com, by raising a ticket or by live chat from
        our application.
      </p>

      <h4>11. Others</h4>

      <p>
        {" "}
        a) Your instructions will be affected only after authentication under
        your Registered number and PIN or through any other mode of verification
        as may be stipulated at the discretion of Deshi. <br />
        b) Deshi shall make all reasonable efforts to ensure that your
        information is kept confidential. <br />
        c) You will be required to acquaint yourself with the process for using
        the Product and that you shall be responsible for any error made while
        using the Product. <br />
        d) Deshi reserves the right to decide what services may be offered.
        Additions/ deletions to the services offered under the product are at
        its sole discretion. <br />
        e) While it shall be the endeavor of Deshi to carry out the instructions
        received from you promptly, it shall not be responsible for the delay/
        failure in carrying out the instructions due to any reasons whatsoever
        including failure of operational system or due to any requirement of
        law. You expressly authorize Deshi to access your e-wallet information
        required for offering features under the service and also to share the
        information regarding your e-Wallet with the service provider/ third
        party as may be required to provide the services. <br />
        f) The transactional details will be recorded by Deshi and these records
        will be regarded as conclusive proof of the authenticity and accuracy of
        transactions. <br />
        g) You hereby authorize Deshi or its representatives to send promotional
        messages including the products, greetings, advertising or any other
        messages Deshi may consider from time to time. <br />
        h) You understand that Deshi may send "rejection" or "cannot process the
        request" messages for the service requested by you which could not be
        executed for any reason. <br />
        i) Deshi reserves the right to replace or amend its features, facilities
        and charges, and the information and materials pertaining to such
        features, facilities and charges, in relation to the services provided
        by Deshi, its contents, website, or any of its products
      </p>

      <h4>12. Fee structure for the Product</h4>
      <p>
        {" "}
        a) We will be entitled to set off and/or deduct from any payment due to
        you, such payments that are subsequently determined to be not due and/or
        wrongly paid to you. <br />
        b) All charges applicable to the Deshi service are set forth in a
        separate fee schedule available at the website of Deshi
        (www.deshipay.com) and as may be published from time to time by Green
        and Red Technologies Limited (G&R) and are subject to change at any time
        at G&R’s sole discretion. <br />
        c) Any Fees and other amounts (such as- VAT etc.) due and payable to
        Deshi under the Agreement may be deducted from your e-wallet with or
        without notice. Such deductions may be made at any time, and without
        notifying you, but these will be reflected in the transaction history of
        your e-wallet.
      </p>

      <h4>13. User Information</h4>

      <p>
        a) You agree that you shall defend, indemnify and hold Deshi harmless
        from and against any and all claims, costs, damage, losses, liabilities
        and expenses arising out of or in connection with your violation or
        breach of any of these terms and conditions or any applicable law or
        regulation, or your use or misuse of the services of Deshi. <br />
        b) You shall be liable for any claim for damages, penalty, losses, legal
        suit, or criminal offence if such an occurrence arises due to any
        unauthorized use of the services of Deshi. <br />
        c) It is your responsibility to provide correct information to Deshi
        through the use of the Product or any other method. In case of any
        discrepancy in this information, you understand that Deshi will not be
        in any way responsible for action taken based on the information. Deshi
        will endeavor to correct the error promptly wherever possible on a best
        effort basis, if you report such error within 2 (two) hours of providing
        the error in information. <br />
        d) If you receive information about another Deshi customer, you must
        keep the information confidential and only use it in connection with the
        Deshi services. You may not disclose or distribute any information about
        Deshi users to a third party or use the information for marketing
        purposes unless you receive that user’s express consent to do so. You
        may not send unsolicited emails to a Deshi customer or use the Deshi
        services to collect payments for sending, or assist in sending,
        unsolicited emails to third parties. <br />
        e) We are not responsible for any loss or damage you suffered as a
        result of you providing wrong information. <br />
        f) In case of providing inaccurate or incorrect information to us, we
        may immediately limit or suspend or close your account and refuse to
        provide our Services to you. g) In case of any authorized regulatory
        body’s involvement or order, we are bound to provide information to them
        for any kind of investigation or may even freeze your account until such
        investigation is resolved. <br />
        h) Deshi reserve the right to refuse any service to any Deshi user
        without giving any reason or prior warning.
      </p>

      <h4>14. Responsibilities and obligations of the E-Wallet holder</h4>
      <p>
        a) It will be your responsibility to notify Deshi immediately if you
        suspect the miss use of the PIN/Password. <br />
        b) You will be responsible for all transactions, including
        erroneous/mistakenly initiated through Deshi, mobile number and PIN;
        regardless of whether such transactions are authorized by you. You will
        also be responsible for the loss/damage, if any suffered in respect of
        all such transactions. <br />
        c) You will take all possible steps to ensure that the PIN, Password and
        OTPs are not shared with any unauthorized person and shall contact Deshi
        customer care center in case of misuse/ theft/loss of the mobile phone.{" "}
        <br />
        d) You will be liable for all loss or breach of the terms and conditions
        contained herein or contributed or caused the loss by negligent actions
        or a failure to advise Deshi within a reasonable time about any
        unauthorized access in the Wallet.
      </p>

      <h4>15. Refund and Chargeback</h4>
      <p>
        a) We will not be liable to you for any refund/Chargeback not initiated
        through Deshi. <br />
        b) If we receive a request for Refund/chargeback of payment, the dispute
        resolution process will be followed and it will vary case to case.{" "}
        <br />
        c) If you want to claim a chargeback, you have to raise a ticket through
        the application mentioning the reason. These reasons offer an
        explanation as to why you are disputing the transaction. Each reason has
        its own set of rules (filing time limits, necessary documentation,
        etc.). Deshi will check the customer’s chargeback claim, making sure all
        the regulations have been addressed. <br />
        d) If you have a valid claim according to Deshi, the funds will be
        removed from the merchant’s wallet account and credited to yours. If it
        is not a valid claim according to Deshi, the chargeback will be voided.{" "}
        <br />
        e) However, if the merchant has sufficient compelling evidence
        (documentation to prove the chargeback is invalid), the merchant can
        re-present the chargeback for review. If a chargeback process is
        successful, it will auto reconcile your account, Deshi and Merchant.
        Merchant will be liable to pay the fees associated with disputed
        transaction. <br />
        f) If you want to return a purchase or want to refund for non-delivery
        items it will be followed by the merchant’s prescribed terms and
        conditions. If the merchant finds the request valid as per his/her
        business policy, he will initiate the refund through the application.
        Merchant will be liable to pay the fees associated with transaction
        amount. <br />
        g) In case of Refund/Chargeback, the money will be refunded to the
        original payment method you used for the transaction such as- a debit
        card, credit card, or Deshi account.
      </p>

      <h4>16. Disclaimer</h4>
      <p>
        a) Deshi will not be liable for any loss caused by a technical breakdown
        of the payment system. <br />
        b) Use of the e-wallet will be terminated without notice at Deshi’s
        discretion which may be upon the death, bankruptcy or insolvency of the
        E-Wallet holder or on receipt of request from the e-Wallet holder,
        receipt of an attachment order from a competent court or revenue
        authority, due to violation of Deshi regulations, or for other valid
        reasons or when the whereabouts of the e-Wallet holder become unknown to
        Deshi due to any cause attributable to the e-Wallet holder or any other
        reason which Deshi deems fit. <br />
        c) Deshi will not be responsible if the e-wallet application is not
        compatible with/ does not work on your mobile handset. <br />
        d) Deshi, when acting in good faith, will be absolved of any liability
        in case: <br />
        • Deshi is unable to receive or execute any of the requests from you
        when there is loss of information during processing or transmission or
        any unauthorized access by any other person or breach of confidentiality
        or due to reasons beyond the control of the Deshi. <br />
        • There is any kind of loss, direct or indirect, incurred by you or any
        other person due to any failure or lapse in the product which are beyond
        the control of the Deshi. <br />
        • There is any failure or delay in transmitting of information or there
        is any error or inaccuracy of information or any other consequence
        arising from any cause beyond the control of Deshi which may include
        technology failure, mechanical breakdown, power disruption, etc. <br />
        • There is any lapse or failure on the part of the service providers or
        any third party affecting the said Product and that Deshi makes no
        warranty as to the quality of the service provided by any such provider
        for any delay or non-performance of its obligations under these terms
        and conditions arising from any cause or causes beyond its reasonable
        control, including (but not limited to) an act of God, governmental act,
        earthquake, war, fire, flood, explosion, civil commotion or industrial
        dispute whether lawful or otherwise, armed hostilities, act of
        terrorism, suicide bombing and attacks, explosions; revolution;
        blockade; embargo; strike; lock-out sit-in industrial or trade dispute;
        adverse weather; epidemic or pandemic; industrial accident and natural
        disasters. <br />
        e) Deshi and its employees will not be liable for and in respect of any
        loss or damage whether direct, indirect or consequential, including but
        not limited to loss of revenue, profit, business, contracts, anticipated
        savings or goodwill, loss of use or value of any equipment including
        software, whether foreseeable or not, suffered by you or any person
        howsoever arising from or relating to any delay, interruption,
        suspension, resolution or error of Deshi in receiving and processing the
        request and in formulating and returning responses or any failure,
        delay, interruption, suspension, restriction, or error in transmission
        of any information or message to and from the telecommunication
        equipment and the network of any service provider and Deshi’s system or
        any breakdown, interruption, suspension or failure of the
        telecommunication equipment, Deshi’s system or the network of any
        service provider and/or any third party who provides such services as is
        necessary to provide the Product.
      </p>
      <h4>17. Prohibited actions and Transactions</h4>
      <p>The following transactions or actions are prohibited:</p>
      <p>
        I. To use your e-wallet for purposes including, but not limited to,
        Money Laundering, fraud, terrorist financing or such other
        illegal/criminal activities. <br />
        II. Report the transaction to the relevant law enforcement agency <br />
        III. To use your e-Wallet to receive funds from persons or entities
        engaged in fraud, terrorist financing, money laundering, fraud or other
        illegal/criminal activities. <br />
        IV. Refuse to cooperate in an investigation or provide confirmation of
        your identity or any other information provide by you to Deshi; <br />
        V. Provide false, inaccurate or misleading information; <br />
        VI. If you act in breach or we believe that you may be acting in breach
        of the prohibitions contained in Clauses 16 (d) and 16(e) we reserve the
        right to: <br />
        VII. Decline to perform or reverse the transaction and simultaneously
        limit or terminate or suspend your e-Wallet or forfeit your account;{" "}
        <br />
        VIII. It is strictly your responsibility to ensure that you only send or
        receive e-money from or to Persons or entities for the sale or supply of
        goods and services that you may provide or receive in compliance with
        any applicable laws and regulations. Funds that have been transferred to
        another Persons' or entity’s account does not indicate the legality of
        the supply or provision of their goods or services. It is required that
        you should not proceed with any transactions in the instance where you
        have any hints that the transaction is not legal.
      </p>
      <h4>18. Security as Per PCI DSS</h4>
      <p>
        Deshi has established security procedures and shall make reasonable
        efforts consistent with industry standards to protect cardholder data,
        meet all applicable audit requirements and comply with PCI DSS
        (hereinafter “Payment Card Industry Data Security Standards”) and such
        other applicable rules, regulations, codes of practice, guidance and
        industry standards related to the handling and processing of credit card
        data in force from time to time during the term hereof “Payment Card
        Issuer Requirements”, as established by the PCI Security Standards
        Council. Deshi is responsible for the security of cardholder data Deshi
        possesses or otherwise stores, processes, or transmits on Customer’s
        behalf, or to the extent Deshi could impact the security of Customer’s
        cardholder data environment. Deshi agrees to comply with all applicable
        PCI DSS requirements to the extent that Deshi handles, has access to, or
        otherwise stores, processes or transmits Customer’s cardholder data, or
        manages Customer’s cardholder data environment. Deshi agrees to comply
        with all applicable laws that require notification of individuals or
        parties in the event of unauthorized disclosure of cardholder data.
        Pursuant to the provisions hereof, in the event of a breach of any of
        Deshi’s security obligations relating to PCI or other event requiring
        notification under applicable law, Deshi agrees to assume responsibility
        for informing all such individuals in accordance with applicable laws,
        and, subject to the indemnity and limitations on liability provisions
        contained herein.
      </p>
      <h4>19. Governing Law & Jurisdictions</h4>
      <p>
        The Product and the terms and conditions of the same are governed by the
        applicable laws in the Peoples’ Republic of Bangladesh such as-
        Bangladesh Bank regulations under PSP license, Payment and settlement
        act, 2014 or any other regulatory bodies.
      </p>

      <h4>20. Indemnity</h4>
      <p>
        In consideration of Deshi providing the Product, you agree to indemnify
        and hold Deshi harmless against all actions, claims, demands
        proceedings, loss, damages, costs, charges and expenses which Deshi may
        at any time incur, sustain, suffer or be put to as a consequence of or
        arising out of or in connection with any services provided to you
        pursuant hereto. You shall indemnify and keep indemnified Deshi for
        unauthorized access by any third party to any
        information/instructions/triggers given by the you or breach of
        confidentiality.
      </p>

      <h4>21. Modification of this Terms and Conditions</h4>
      <p>The following transactions or actions are prohibited:</p>
      <p>
        a) Please ensure that you read the revised terms and conditions
        carefully because you will be bound by the revised terms and conditions
        from this date. <br />
        b) Any notice or notification in connection with these terms and
        conditions will be communicated through your registered email or via
        Deshi Business App or via Deshi official website. <br />
        c) Deshi reserves the right to change, modify, add, or remove portions
        of this terms and conditions (each, a change and collectively, changes)
        at any time by posting notification on the Deshi Platform or otherwise
        communicating the notification to you. The changes will become
        effective, and shall be deemed accepted by you, 24 hours after the
        initial posting and shall apply immediately on a going-forward basis
        with respect to your use of the Deshi Platform, availing the Deshi
        Services or for payment transactions initiated after the posting date.
        If you do not agree with any such change, your sole and exclusive remedy
        is to terminate your use of the Deshi Services/Deshi Platform. For
        certain changes, Deshi may be required under applicable law to give you
        advance notice, and Deshi will comply with such requirements. Your
        continued use of the Deshi Platform following the posting of changes
        will mean that you accept and agree to the changes.
      </p>

      <h4>22. Severability</h4>
      <p>
        If any provision of this terms and condition is held to be unlawful,
        void, invalid or otherwise unenforceable, then that provision will be
        limited or eliminated from this terms and conditions to the minimum
        extent required, and the remaining provisions will remain valid and
        enforceable.
      </p>
      <h4>23. Campaign Terms and Conditions</h4>
      <h5>At ShareTrip pay using Deshi and get Instant Cashback</h5>
      <p>
        Zero charges on payments is amazing and getting cashback in addition to
        that sounds fantastic. As a result, Deshi and ShareTrip have come up
        with an amazing cashback offer for you.
      </p>
      <p>
        Top up to ShareTrip and receive up to BDT 500 Instant Cashback via Deshi
        payment.
      </p>
      <h5>Campaign Details</h5>
      <p>
        • When you use your Deshi account to pay through the merchant QR code or
        online gateway, you will be eligible for a cashback of up to BDT 500.{" "}
        <br />
        • No additional charge on Top-Up during the campaign period <br />
        • One Deshi user ID can get a maximum up to BDT 500 during the campaign
        period. <br />
        • Minimum transaction of BDT 5,000 and get maximum cashback of BDT 250
        (twice). <br />
        • The payback amount will be deposited into the same Deshi account from
        which you will pay the bill. <br />
        • This campaign will run from 1st June to 30th June 2022. <br />
        • You must have an active Deshi account to receive this cashback. <br />
        • Any user during the campaign period making a top-up to ShareTrip B2B
        agent account using Deshi wallet will not be allowed to withdraw rather
        they need to purchase and avail service from ShareTrip B2B panel.
      </p>

      <h5>Campaign Duration</h5>
      <p>June 2022</p>

      <h5>Terms and Conditions</h5>
      <p>
        Deshi announces that: <br />
        Deshi will never ask you to reveal your Deshi account's One-time
        Password (OTP) or Personal Identification Number (PIN), nor will they
        ask you to make any payment to anyone.
      </p>
      <p>
        For any confusion or conflict with regards to this campaign, you must
        send any other call and immediately call back to +8809617617617 to
        ascertain the authenticity of the call or for required information.
      </p>

      <h4>Annexure A</h4>
      <table className="myTable">
        <tr>
          <th colSpan="3" className={classes.center}>
            Transaction Limit (Personal Wallet)
          </th>
        </tr>
        <tr>
          <td>Sl. No</td>
          <td>Description</td>
          <td>Amount (BDT)</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Maximum balance at any point of time</td>
          <td>4,00,000</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Add Money through any channel per transaction</td>
          <td>1,00,000</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Add Money Per Month</td>
          <td>4,00,000</td>
        </tr>

        <tr>
          <td>4</td>
          <td>Purchase (Personal to Business)</td>
          <td>No Limit</td>
        </tr>

        <tr>
          <th>5</th>
          <th colSpan="2">Send Money</th>
        </tr>
        <tr>
          <td></td>
          <td> -Per transaction limit</td>
          <td>50,000</td>
        </tr>
        <tr>
          <td></td>
          <td> -Daily limit</td>
          <td>1,00,000</td>
        </tr>
        <tr>
          <td></td>
          <td> -Monthly limit</td>
          <td>4,00,000</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Cash-out at ATM per transaction</td>
          <td>20,000</td>
        </tr>

        <tr>
          <th>7</th>
          <th colSpan="2">Transfer to Bank A/C</th>
        </tr>
        <tr>
          <td></td>
          <td> -Per transaction limit</td>
          <td>50,000</td>
        </tr>
        <tr>
          <td></td>
          <td> -Daily limit</td>
          <td>1,00,000</td>
        </tr>
        <tr>
          <td></td>
          <td> -Monthly limit</td>
          <td>4,00,000</td>
        </tr>
      </table>
      <p>
        Note: *Deshi reserves the right to change the limit structure at its
        discretion.
      </p>
      <h4>Annexure B</h4>
      <table className="myTable">
        <tr>
          <th colSpan="3" className={classes.center}>
            Transaction Fee (Personal Wallet)
          </th>
        </tr>
        <tr>
          <td className={classes.center}>Service</td>
          <td className={classes.center}>Fee/Charge (Including VAT)</td>
        </tr>
        <tr>
          <td>Registration</td>
          <td>Free</td>
        </tr>
        <tr>
          <td>Account Maintenance</td>
          <td>Free</td>
        </tr>
        <tr>
          <td>Unlink Bank</td>
          <td>BDT _</td>
        </tr>
        <tr>
          <td>Utility Bill Payment</td>
          <td>BDT __</td>
        </tr>
        <tr>
          <td>Credit Card Bill Payment</td>
          <td>1%</td>
        </tr>
        <tr>
          <td>Add Money from Debit/Credit Card</td>
          <td>Free</td>
        </tr>
        <tr>
          <td>Add Money from Bank</td>
          <td>Free</td>
        </tr>
        <tr>
          <td>Transfer Money to Bank</td>
          <td>1%</td>
        </tr>
        <tr>
          <td>Send Money (Wallet to Wallet)</td>
          <td>Free</td>
        </tr>
        <tr>
          <td>Receive Money (Wallet to Wallet)</td>
          <td>Free</td>
        </tr>
        <tr>
          <td>Mobile Recharge</td>
          <td>Free</td>
        </tr>
        <tr>
          <td>QR Code Payment</td>
          <td>Free</td>
        </tr>
        <tr>
          <td>Transaction History</td>
          <td>Free</td>
        </tr>
        <tr>
          <td>ATM Cash Out (minimum withdrawal amount BDT 3000)</td>
          <td>1%</td>
        </tr>
      </table>
      <p>
        * Deshi reserves the right to change the fee structure at its
        discretion.
      </p>
    </div>
  );
};

export default PersonalTC;
