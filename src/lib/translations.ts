import i18n, { type Config } from 'sveltekit-i18n'

const config: Config = {
  loaders: [
    {
      locale: 'en',
      key: '',
      loader: async () => (await import('./i18n/en.json')).default,
    },
    {
      locale: 'et',
      key: '',
      loader: async () => (await import('./i18n/et.json')).default,
    },
    {
      locale: 'fi',
      key: '',
      loader: async () => (await import('./i18n/fi.json')).default,
    },
    {
      locale: 'fr',
      key: '',
      loader: async () => (await import('./i18n/fr.json')).default,
    },
    {
      locale: 'de',
      key: '',
      loader: async () => (await import('./i18n/de.json')).default,
    },
    {
      locale: 'pt',
      key: '',
      loader: async () => (await import('./i18n/pt.json')).default,
    },
  ],
  fallbackLocale: 'en',
}

export const { t, locale, locales, loading, loadTranslations } = new i18n(
  config
)
