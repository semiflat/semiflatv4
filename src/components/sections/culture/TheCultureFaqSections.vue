<script setup lang='ts'>

const faqs = reactive([
    {
        header: 'Can I work remotely?',
        text: 'Yes, absolutely. All of our team members are currently remote.',
        isOpen: false
    },
    {
        header: 'Will I get a Mac?',
        text: 'If you need hardware, let us know, and we’ll send you one of our MacBooks. Let us know if you have any special requests, and we’ll figure it out!',
        isOpen: false
    },
    {
        header: 'When will I meet everybody?',
        text: 'At the nearest team retreat. We’re likely already planning it, but if you have any suggestions regarding the destination, drop them on Slack in #team-retreats. We typically plan 3 to 4 retreats every year, so no matter when you join, an unforgettable get-together is only a few short months away.',
        isOpen: false
    },
    {
        header: 'How fast can I get a raise?',
        text: 'Salary ranges at Semiflat are fully transparent and correlate directly with our internal skill matrix. There are currently six competency levels, each with its requirements. You can get a raise when your evaluation score puts you at a higher level. Don’t worry if it sounds complicated! We will always tell you what to work on to get to the next level and guide you as you move up the competence ladder. The evaluation process is simple - every teammate you’ve worked with will give you ratings across multiple categories every three months.',
        isOpen: false
    },
])

</script>

<template>
    <div class="page-content mt-16 md:mt-40">
        <h2
            class="text-xl gradient-text font-semibold mb-12 md:text-[1.75rem] md:leading-[120%] md:text-center md:mb-[5rem]">
            But wait, what if I still have questions?_</h2>
            <TheFaqComponent :faqs="faqs"/>
    </div>
</template>
