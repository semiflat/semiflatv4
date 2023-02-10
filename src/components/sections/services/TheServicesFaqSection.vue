<script setup lang='ts'>

const faqs = reactive([
    {
        header: 'Why does every project need a workshop and analysis phase??',
        text: 'We can help you turn your product idea into an actionable design project plan.',
        isOpen: false
    },
    {
        header: 'How long can the workshop and analysis phase take?',
        text: 'We can help you turn your product idea into an actionable design project plan.',
        isOpen: false
    },
    {
        header: 'What is the outcome of the research and analysis phase?',
        text: 'We can help you turn your product idea into an actionable design project plan.',
        isOpen: false
    },
])

</script>

<template>
    <div class="page-content mt-16 md:mt-40">
        <h2
            class="text-xl gradient-text font-semibold mb-12 md:text-[1.75rem] md:leading-[120%] md:text-center md:mb-[5rem]">
            Frequently asked questions about workshops and <br class="hidden md:block"> analysis_</h2>
            <TheFaqComponent :faqs="faqs"/>
    </div>
</template>