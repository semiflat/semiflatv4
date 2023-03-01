<script setup lang='ts'>

const faqs = reactive([
    {
        header: 'What deliverables will I receive?',
        text: 'A separate Figma file for every stage of the design process. A typical deliverables package consists of a low-fidelity wireframes Figma file, high fidelity wireframes Figma file, and a separate file containing all reusable components from the design.',
        isOpen: false
    },
    {
        header: 'What are the next steps to work with you?',
        text: 'Click the ‘Get in touch’ button in the top right corner or message hello@semiflat.com outlining your high-level design needs. We’ll reply and work out a time for an introductory call where you’ll ask us anything that’s on your mind. From there, we’ll work towards defining the scope, pricing, and timeline.',
        isOpen: false
    },
    {
        header: 'What is the timeline to design an MVP?',
        text: 'A typical MVP takes between 2 and 3 months to design. This includes working through all stages of product design - from user stories through user experience, ending with a user interface and a component library.',
        isOpen: false
    },
    {
        header: 'Do you implement the designs too?',
        text: 'We implement complex websites and marketing pages using no-code (Webflow) but can also implement the front-end of a web app using traditional development.',
        isOpen: false
    },
    {
        header: 'How much should I budget for the project?',
        text: 'Designing a typical MVP from scratch usually costs between $15k and $25k. Ongoing design support packages start from $6400/month with no long-time commitment. Contact us for individual pricing if you’re looking for a dedicated design team.',
        isOpen: false
    },
])

</script>

<template>
    <div class="page-content mt-16 md:mt-20">
        <h2
            class="text-xl gradient-text font-semibold mb-12 md:text-[1.75rem] md:leading-[120%] md:text-center md:mb-[5rem]">
            Have any questions? We’re here to help you <br class="hidden md:block" /> navigate the world of design_</h2>
        <TheFaqComponent :faqs="faqs" />
    </div>
</template>
