module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended' // Extensión recomendada para proyectos Vue 3
    ],
    rules: {
        // Aquí puedes agregar reglas personalizadas o modificar las existentes
        'vue/multi-word-component-names': 'off',
    },
};
