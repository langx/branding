/**
 * goldie config for the 2.x store set: the eight shots of ../2.x/README.md,
 * framed by goldie (https://github.com/kacperkapusciak/goldie) instead of
 * the flat card. The type is goldie's GoldieConfig (`import type
 * { GoldieConfig } from "goldie"` once node_modules is installed); it is not
 * imported here so the file loads without a typecheck step.
 *
 * Capture is not run. There is no simulator in this pipeline: the screens are
 * the renders in ../marketing/2.x/screens, and manifest.mjs hands them to
 * goldie as if they were captures. Every scene's `flow` is therefore a name
 * only, and appPath / bundleId stay empty on purpose.
 *
 * Copy is the same eight headlines and support lines as the card set, in the
 * same eight languages, so the two sets make the same claims. The Turkish has
 * been read by a native speaker; the rest have not.
 */

const YELLOW = "#ffc409";
const WHITE = "#ffffff";
const INK = "#17191c";

const config = {
  appRoot: "..",
  appPath: "",
  bundleId: "",

  devices: ["iphone-6.9", "pixel-10-pro"],
  locales: ["en", "tr", "es", "ru", "ar", "fr", "de", "pt-BR"],
  appearance: "light",

  frame: { variant: "17-pro-silver" },

  theme: {
    // The light ground and its copy colours. frame.mjs swaps all three per
    // scene ground, since goldie has one copy colour per theme and this set
    // has three grounds.
    background: WHITE,
    headlineColor: INK,
    subheadColor: "#62676d",
    // Registered from ./fonts by frame.mjs. Nunito has no Arabic; the
    // canvas falls through to Noto Sans Arabic per glyph.
    fontFamily: '"Nunito", "Noto Sans Arabic", sans-serif',
    copyHeightRatio: 0.24,
    deviceWidthRatio: 0.84,
  },

  store: {
    name: "LangX: Language Exchange",
    subtitle: {
      en: "Practice with real people",
      tr: "Gerçek insanlarla pratik",
      es: "Practica con gente real",
      ru: "Практика с живыми людьми",
      ar: "تدرّب مع أشخاص حقيقيين",
      fr: "Pratiquez avec de vrais gens",
      de: "Üben mit echten Menschen",
      "pt-BR": "Pratique com gente real",
    },
    developer: "LangX",
    category: "Education",
    rating: 0,
    ratingCount: "",
    ageRating: "17+",
    price: "Free",
    description: {
      en: "Practice a language by talking with people learning yours.",
      tr: "Senin dilini öğrenen biriyle konuşarak dil öğren.",
      es: "Practica un idioma hablando con quien aprende el tuyo.",
      ru: "Практикуй язык с теми, кто учит твой.",
      ar: "تدرّب على لغة بالحديث مع من يتعلّم لغتك.",
      fr: "Pratiquez une langue avec ceux qui apprennent la vôtre.",
      de: "Übe eine Sprache mit Menschen, die deine lernen.",
      "pt-BR": "Pratique um idioma conversando com quem aprende o seu.",
    },
  },

  // Store order. Three acts, as in the card set: yellow opens, two light
  // screens carry the loop, four dark ones are the app after hours, yellow
  // closes. Layouts are set per scene rather than by a template because
  // frame.mjs renders each ground as its own pass, and a template counts
  // positions within a pass.
  scenes: [
    {
      kind: "screenshot",
      id: "discover",
      flow: "discover",
      background: YELLOW,
      layout: "hero",
      headline: {
        en: "They need your language",
        tr: "Senin dilini arıyorlar",
        es: "Necesitan tu idioma",
        ru: "Им нужен ваш язык",
        ar: "يحتاجون لغتك",
        fr: "Ils ont besoin de ta langue",
        de: "Sie brauchen deine Sprache",
        "pt-BR": "Eles precisam da sua língua",
      },
      subhead: {
        en: "And you need theirs. That is the whole match.",
        tr: "Sen de onlarınkini. Eşleşmenin tamamı bu.",
        es: "Y tú el suyo. En eso consiste el match.",
        ru: "А вам — их. В этом и весь смысл.",
        ar: "وأنت تحتاج لغتهم. هذا هو التطابق كلّه.",
        fr: "Et toi de la leur. C’est tout le principe.",
        de: "Und du ihre. Mehr ist das Match nicht.",
        "pt-BR": "E você da deles. O match é isso.",
      },
    },
    {
      kind: "screenshot",
      id: "chat",
      flow: "chat",
      background: WHITE,
      layout: "tilt",
      headline: {
        en: "Say it wrong. Get it fixed.",
        tr: "Yanlış söyle, düzeltilsin",
        es: "Dilo mal. Que te corrijan.",
        ru: "Ошиблись — вас поправят",
        ar: "قلها بخطأ، وسيصحّحونها",
        fr: "Dis-le mal, fais-toi corriger",
        de: "Sag es falsch, werde korrigiert",
        "pt-BR": "Fale errado. Seja corrigido.",
      },
      subhead: {
        en: "Hold any message to suggest a better way to say it.",
        tr: "Bir mesajı basılı tut, daha iyi söylenişini öner.",
        es: "Mantén pulsado un mensaje y sugiere cómo decirlo mejor.",
        ru: "Задержите сообщение, чтобы предложить лучший вариант.",
        ar: "اضغط مطوّلًا على أي رسالة لتقترح صياغة أفضل.",
        fr: "Appuie longuement sur un message pour proposer mieux.",
        de: "Halte eine Nachricht gedrückt und schlage etwas Besseres vor.",
        "pt-BR": "Segure uma mensagem para sugerir um jeito melhor.",
      },
    },
    {
      kind: "screenshot",
      id: "feed",
      flow: "feed",
      background: WHITE,
      layout: "classic",
      headline: {
        en: "Corrections are always free",
        tr: "Düzeltmeler hep ücretsiz",
        es: "Las correcciones son gratis",
        ru: "Исправления всегда бесплатны",
        ar: "التصحيحات مجانية دائمًا",
        fr: "Les corrections sont gratuites",
        de: "Korrekturen sind immer gratis",
        "pt-BR": "Correções são sempre grátis",
      },
      subhead: {
        en: "Unlimited for everyone, on every plan.",
        tr: "Herkes için sınırsız, her planda.",
        es: "Ilimitadas para todos, en todos los planes.",
        ru: "Без ограничений, на любом тарифе.",
        ar: "بلا حدود للجميع، في كل خطة.",
        fr: "Illimitées pour tout le monde, sur tous les forfaits.",
        de: "Unbegrenzt für alle, in jedem Tarif.",
        "pt-BR": "Ilimitadas para todo mundo, em qualquer plano.",
      },
    },
    {
      // The whole screen stays in frame: its last line says tokens cannot be
      // bought, traded or withdrawn, which is the answer to Guideline 3.1.5(b).
      kind: "screenshot",
      id: "tokens-dark",
      flow: "tokens-dark",
      background: INK,
      layout: "classic",
      headline: {
        en: "Earned by teaching",
        tr: "Öğreterek kazanılır",
        es: "Se ganan enseñando",
        ru: "Зарабатываются обучением",
        ar: "تُكتسب بالتعليم",
        fr: "Gagnés en enseignant",
        de: "Durch Lehren verdient",
        "pt-BR": "Ganhos ensinando",
      },
      subhead: {
        en: "Tokens cannot be bought, traded or withdrawn.",
        tr: "Jetonlar satın alınamaz, takas edilemez, çekilemez.",
        es: "Los tokens no se compran, ni se cambian, ni se retiran.",
        ru: "Токены нельзя купить, обменять или вывести.",
        ar: "لا يمكن شراء الرموز أو تبادلها أو سحبها.",
        fr: "Les jetons ne s’achètent, ne s’échangent et ne se retirent pas.",
        de: "Token lassen sich nicht kaufen, tauschen oder auszahlen.",
        "pt-BR": "Os tokens não podem ser comprados, trocados ou sacados.",
      },
    },
    {
      kind: "screenshot",
      id: "chat-dark",
      flow: "chat-dark",
      background: INK,
      layout: "duo",
      secondScene: "feed-dark",
      headline: {
        en: "It has a night side",
        tr: "Bir de gece hali var",
        es: "También tiene modo noche",
        ru: "У него есть ночная сторона",
        ar: "وله وجه ليلي",
        fr: "Il a un côté nuit",
        de: "Es hat eine Nachtseite",
        "pt-BR": "Ele tem um lado noturno",
      },
      subhead: {
        en: "Every screen follows your system setting.",
        tr: "Her ekran sistem ayarını takip eder.",
        es: "Cada pantalla sigue el ajuste de tu sistema.",
        ru: "Каждый экран следует настройке системы.",
        ar: "كل شاشة تتبع إعداد نظامك.",
        fr: "Chaque écran suit le réglage de ton système.",
        de: "Jeder Bildschirm folgt deiner Systemeinstellung.",
        "pt-BR": "Cada tela segue o ajuste do seu sistema.",
      },
    },
    {
      kind: "screenshot",
      id: "feed-dark",
      flow: "feed-dark",
      background: INK,
      layout: "tilt-right",
      headline: {
        en: "Ask when you’re stuck",
        tr: "Takıldığında sor",
        es: "Pregunta cuando te atasques",
        ru: "Спросите, если застряли",
        ar: "اسأل عندما تتعثّر",
        fr: "Demande quand tu bloques",
        de: "Frag, wenn du feststeckst",
        "pt-BR": "Pergunte quando travar",
      },
      subhead: {
        en: "Post a sentence and let the feed fix it.",
        tr: "Bir cümle paylaş, akış düzeltsin.",
        es: "Publica una frase y deja que el feed la corrija.",
        ru: "Опубликуйте фразу — лента её поправит.",
        ar: "انشر جملة ودع الآخرين يصحّحونها.",
        fr: "Publie une phrase et laisse le fil la corriger.",
        de: "Poste einen Satz und lass ihn korrigieren.",
        "pt-BR": "Poste uma frase e deixe o feed corrigir.",
      },
    },
    {
      kind: "screenshot",
      id: "discover-dark",
      flow: "discover-dark",
      background: INK,
      layout: "hero",
      headline: {
        en: "Or whoever is online now",
        tr: "Ya da şu an çevrimiçi olanlar",
        es: "O quien esté en línea ahora",
        ru: "Или те, кто сейчас в сети",
        ar: "أو من هم متصلون الآن",
        fr: "Ou qui est en ligne maintenant",
        de: "Oder wer gerade online ist",
        "pt-BR": "Ou quem está online agora",
      },
      subhead: {
        en: "For you, active, or nearby — the same list, filtered.",
        tr: "Sana özel, aktif ya da yakında — aynı liste, filtreli.",
        es: "Para ti, activos o cerca — la misma lista, filtrada.",
        ru: "Для вас, активные или рядом — тот же список, с фильтром.",
        ar: "لك، أو النشطون، أو القريبون — القائمة نفسها بمرشّح.",
        fr: "Pour toi, actifs ou à proximité — la même liste, filtrée.",
        de: "Für dich, aktiv oder in der Nähe — dieselbe Liste, gefiltert.",
        "pt-BR": "Para você, ativos ou por perto — a mesma lista, filtrada.",
      },
    },
    {
      kind: "screenshot",
      id: "me",
      flow: "me",
      background: YELLOW,
      layout: "hero",
      headline: {
        en: "A streak worth keeping",
        tr: "Sürdürmeye değer bir seri",
        es: "Una racha que vale la pena",
        ru: "Серия, которую хочется беречь",
        ar: "سلسلة تستحق الاستمرار",
        fr: "Une série à ne pas casser",
        de: "Eine Serie, die sich lohnt",
        "pt-BR": "Uma sequência que vale manter",
      },
      subhead: {
        en: "Come back daily and watch the week add up.",
        tr: "Her gün gel, haftanın nasıl geçtiğini gör.",
        es: "Vuelve cada día y mira cómo suma la semana.",
        ru: "Возвращайтесь каждый день и смотрите, как растёт неделя.",
        ar: "عد كل يوم وشاهد أسبوعك يتراكم.",
        fr: "Reviens chaque jour et regarde la semaine se remplir.",
        de: "Komm täglich zurück und sieh die Woche wachsen.",
        "pt-BR": "Volte todo dia e veja a semana somar.",
      },
    },
  ],
};

export default config;
