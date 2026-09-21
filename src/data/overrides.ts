/**
 * TEXTES PROPRES À CE SITE — fusionnés par-dessus src/data/content.ts.
 *
 * Laisse l'objet vide pour garder les textes du template.
 * Clés possibles : ui, home, about, services, booking, contact, notFound, offers.
 * Seules les valeurs indiquées remplacent celles du template ; tout le reste est conservé.
 * Pour `offers` (tableau), l'élément N remplace les champs de la N-ième offre.
 *
 * Mêmes règles que content.ts : aucun fait inventé (chiffres, diplômes, avis),
 * aucune promesse commerciale, aucune allégation médicale, ni prix ni tarif.
 *
 * Clarityllab — angle : la pédagogie. Comprendre ce que tu fais et pourquoi,
 * des explications simples sur chaque exercice, et l'autonomie comme but.
 * (Distinct de CleareFocus, centré sur l'objectif net et le plan lisible.)
 */
import { isSet, nb } from '../lib/utils';
import { site } from './site';

/* Ville ou zone gérée automatiquement par site.ts (jamais écrite en dur ici). */
const place = isSet(site.contact.area) ? site.contact.area : isSet(site.contact.city) ? site.contact.city : '';

export const overrides: Record<string, unknown> = {
  // ================================================================ ACCUEIL
  home: {
    seo: {
      title: place
        ? `Coach sportif à ${place}${nb}: apprendre à t’entraîner en comprenant pourquoi`
        : `Coach sportif${nb}: apprendre à t’entraîner en comprenant pourquoi`,
      description: `Coaching sportif pédagogique${nb}: chaque exercice expliqué avec des mots simples, en présentiel, en visio ou avec un programme à distance, pour comprendre ce que tu fais et devenir autonome.`,
    },
    hero: {
      eyebrow: 'Coaching sportif pédagogique',
      titleLead: 'Tu comprends le pourquoi,',
      titleMark: 'tu gagnes en autonomie',
      lead: `Ce que travaille un mouvement, comment le placer, pourquoi il arrive à ce moment de la séance${nb}: tout t’est expliqué avec des mots simples. Tu ne te contentes pas de suivre des consignes, tu apprends à t’entraîner par toi-même.`,
      visualLabel: 'Comprendre, puis savoir faire',
    },
    highlights: {
      eyebrow: 'La pédagogie',
      title: 'Chaque consigne a son explication',
      subtitle: `Un coach qui explique plutôt qu’un coach qui dicte${nb}: voici ce que cela change, concrètement, à chaque séance.`,
      items: [
        { title: 'Partir de ce que tu sais', text: 'Le bilan sert aussi à repérer ce que tu connais déjà. Inutile de réexpliquer ce qui est acquis, on s’attarde plutôt sur ce qui reste flou.' },
        { title: 'Le mouvement expliqué pas à pas', text: `Placement, respiration, amplitude${nb}: chaque mouvement est montré, commenté puis corrigé, pour que tu saches reconnaître une exécution propre avant d’ajouter de la charge.` },
        { title: 'Tes questions ont leur place', text: `Un exercice qui apparaît, un autre qui disparaît${nb}? Tu demandes, on t’explique. Le plan évolue, et tu comprends chaque modification.` },
        { title: 'Des explications à ta mesure', text: 'La vitesse d’apprentissage varie d’une personne à l’autre. Les explications s’ajustent à ton niveau, et tu prends la main à mesure que tu comprends.' },
      ],
    },
    offers: {
      eyebrow: 'Les services',
      title: 'Choisis comment tu veux apprendre',
    },
    method: {
      eyebrow: 'La méthode',
      title: 'Expliquer, montrer, faire, puis laisser faire',
      subtitle: `Une progression pédagogique simple${nb}: tu passes peu à peu de l’écoute à la pratique autonome.`,
      steps: [
        { title: 'Le bilan et les bases', text: 'On fait le point sur ton objectif, tes habitudes, ton quotidien et ce que tu connais déjà. Quelques notions utiles sont posées dès le départ, comme les séries ou la récupération, pour parler le même langage.' },
        { title: 'Le programme commenté', text: `Tu repars avec un plan détaillé, et surtout justifié${nb}: pourquoi cet exercice, pourquoi cet ordre, pourquoi ce temps de repos.` },
        { title: 'La pratique guidée', text: 'En séance, chaque mouvement est montré, essayé puis corrigé. Tu apprends à reconnaître une bonne exécution, et le plan s’adapte à ta forme comme à tes imprévus.' },
        { title: 'L’autonomie progressive', text: `Peu à peu, tu prends des décisions toi-même${nb}: régler une charge, adapter une séance, choisir une variante. Les points réguliers montrent tout ce que tu sais désormais faire.` },
      ],
    },
    cta: {
      eyebrow: 'Premier pas',
      title: `On commence par les bases${nb}?`,
      lead: 'Une première séance pour découvrir ta pratique, fixer un objectif réaliste et comprendre dès le départ par où commencer, et pourquoi.',
    },
  },

  // =============================================================== À PROPOS
  about: {
    seo: {
      title: `À propos${nb}: une pédagogie de l’entraînement, pas à pas`,
      description: `Une approche pédagogique du coaching sportif${nb}: des explications simples sur chaque mouvement, une progression comprise et l’autonomie comme objectif.`,
    },
    hero: {
      eyebrow: 'À propos',
      titleLead: 'Expliquer chaque exercice,',
      titleMark: 'transmettre la méthode',
      lead: `Suivre des consignes sans les comprendre, c’est dépendre de quelqu’un à chaque séance. Ici, le coaching fonctionne comme un apprentissage${nb}: ce que tu fais, pourquoi tu le fais et comment le reproduire correctement, jusqu’à ce que tu saches t’entraîner avec méthode par toi-même.`,
    },
    approach: {
      eyebrow: 'L’approche',
      title: 'Une pédagogie pas à pas',
      subtitle: 'Les convictions qui guident chaque explication, du premier échange au suivi dans la durée.',
      steps: [
        { title: 'Partir de tes connaissances', text: 'Chaque accompagnement démarre par ta situation concrète et ce que tu sais déjà de l’entraînement. On construit sur ces acquis plutôt que de tout reprendre à zéro.' },
        { title: 'Des mots simples', text: 'Pas de jargon inutile. Chaque notion est expliquée avec des termes accessibles et des exemples concrets, pour qu’elle te reste en tête.' },
        { title: 'Montrer, puis faire faire', text: 'Une explication prend tout son sens quand tu l’appliques. Le mouvement est montré, tu l’essaies, et on corrige jusqu’à ce que tu en saisisses la logique.' },
        { title: 'Te rendre la main', text: 'Le but n’est pas que tu aies besoin d’un coach pour toujours, mais que tu repartes avec assez de repères pour t’entraîner avec méthode et en sécurité.' },
      ],
    },
    philosophy: {
      eyebrow: 'La philosophie',
      title: 'Prendre le temps d’expliquer, pour avancer plus sûrement',
      subtitle: 'Ce qui guide la façon de transmettre, du premier bilan jusqu’à ton autonomie.',
      items: [
        { title: 'Comprendre avant d’accélérer', text: 'Plus d’intensité n’apporte rien si tu ne sais pas encore pourquoi ni comment faire l’exercice. On consolide la compréhension, puis on augmente la difficulté.' },
        { title: 'Toujours savoir pourquoi', text: 'Chaque exercice et chaque changement de plan a une raison, et elle t’est donnée. Si un objectif paraît irréaliste, on t’explique aussi pourquoi.' },
        { title: 'Des acquis qui restent', text: 'Ce que tu as vraiment compris, tu le gardes. Ces connaissances te servent bien au-delà de l’accompagnement, y compris quand les semaines se compliquent.' },
      ],
      commitmentsTitle: 'Ce que la pédagogie t’apporte',
      commitments: [
        'Un premier bilan sans jugement sur ton niveau ni sur ce que tu sais déjà.',
        'Des explications simples sur chaque exercice et chaque consigne.',
        'Toute la place pour tes questions, même celles qui te paraissent basiques.',
        'Une progression pensée pour te rendre autonome.',
      ],
      notHereTitle: 'Ce que l’on évite',
      notHere: [
        'Des consignes à appliquer sans explication.',
        'Du jargon utilisé pour impressionner plutôt que pour éclairer.',
        'Des annonces de transformation express.',
        `Des conseils médicaux${nb}: pour toute question de santé, ton médecin reste l’interlocuteur de référence.`,
      ],
      quote: `«${nb}Comprendre un exercice, c’est pouvoir le refaire sans personne pour te le rappeler.${nb}»`,
    },
    values: {
      eyebrow: 'Les valeurs',
      title: 'Ce qui guide chaque explication',
      subtitle: 'Des repères présents dès la première séance et tout au long de ton apprentissage.',
      items: [
        { title: 'Écoute', text: 'Comprendre tes questions aide à mieux y répondre. Tes habitudes, tes doutes et tes envies orientent la manière dont chaque notion t’est présentée.' },
        { title: 'Exigence', text: 'La technique reste précise et les corrections nettes, toujours accompagnées d’une explication. Une erreur sert à apprendre, jamais à juger.' },
        { title: 'Simplicité', text: 'Des mots accessibles, des consignes directes, des modalités pratiques présentées dès le départ. Rien ne reste obscur.' },
        { title: 'Transmission', text: 'Chaque séance t’apprend quelque chose que tu pourras réutiliser. L’accompagnement a atteint son but quand tu sais faire par toi-même.' },
      ],
    },
    formats: {
      eyebrow: 'Travailler ensemble',
      title: 'Apprendre en séance ou à distance',
      subtitle: `Le format dépend de ta situation${nb}; les explications et l’objectif d’autonomie restent les mêmes.`,
      texts: {
        inPerson: `Des séances individuelles en salle, à domicile ou en extérieur${nb}: chaque exercice est montré, commenté et corrigé sur place.`,
        online: 'En visio, les consignes sont expliquées pas à pas pendant une séance guidée en direct, avec des corrections au fil des séries.',
        remote: 'Un programme écrit pour toi, où chaque exercice est accompagné de son explication, revu à chaque fin de cycle.',
      },
    },
    cta: {
      eyebrow: 'La suite',
      title: `Qu’aimerais-tu comprendre${nb}?`,
      lead: 'Dis-nous où tu en es, ce que tu sais déjà de ton entraînement et ce que tu aimerais apprendre à faire.',
    },
  },

  // =============================================================== SERVICES
  services: {
    seo: {
      title: `Services${nb}: des formats où chaque exercice est expliqué`,
      description: `Séances individuelles en présentiel ou en visio, programme d’entraînement commenté et repères nutritionnels expliqués${nb}: des formats de coaching sportif pour comprendre ce que tu fais.`,
    },
    hero: {
      eyebrow: 'Les services',
      titleLead: 'Tu ne fais pas qu’exécuter,',
      titleMark: 'tu apprends',
      lead: 'Quel que soit le format choisi, chaque accompagnement commence par un bilan, explique chaque exercice et te laisse un peu plus d’autonomie au fil des semaines.',
    },
    offers: {
      eyebrow: 'Le détail',
      title: 'Trouve ta façon d’apprendre',
    },
    common: {
      eyebrow: 'Quel que soit le format',
      title: 'Les bases de la pédagogie',
      subtitle: `Communs à chaque accompagnement${nb}: ces repères font de chaque séance un moment où tu apprends.`,
      items: [
        { title: 'Un bilan qui situe tes acquis', text: 'Aucune séance ne commence sans avoir identifié ton point de départ, ce que tu sais déjà et un objectif dont on peut suivre l’évolution.' },
        { title: 'Chaque changement justifié', text: 'Le programme évolue d’après tes retours, et chaque modification arrive avec sa raison. Tu sais toujours ce qui change, et pourquoi.' },
        { title: 'Toutes les questions comptent', text: `Un mot inconnu, un exercice dont tu ne vois pas l’intérêt${nb}? Tu poses la question directement à ton coach.` },
        { title: 'Des repères que tu sais lire', text: `Répétitions, charges, souffle, ressenti${nb}: on t’apprend à interpréter ces indicateurs pour suivre ta progression par toi-même.` },
      ],
    },
    process: {
      eyebrow: 'Comment ça se passe',
      title: 'Ce qui se passe, et pourquoi',
      subtitle: `Rien de mystérieux${nb}: chaque étape de l’accompagnement t’est présentée à l’avance.`,
      steps: [
        { title: 'Le premier contact', text: 'Tu réserves une séance ou tu écris. On parle de ton objectif, de ton emploi du temps et de ce que tu sais déjà sur l’entraînement.' },
        { title: 'Le bilan', text: 'On passe en revue tes habitudes, ton niveau, ton matériel et d’éventuels points de vigilance. Puis on choisit un objectif réaliste, en t’expliquant comment en suivre l’évolution.' },
        { title: 'Le plan commenté', text: `Format, fréquence réaliste, contenu des séances, succession des cycles${nb}: tu sais à quoi sert chaque élément du plan.` },
        { title: 'La pratique et les explications', text: `Les séances alternent démonstrations, essais, corrections et réponses à tes questions. En fin de cycle, on fait le point${nb}: ce que tu maîtrises désormais, ce qu’il reste à apprendre.` },
      ],
    },
    cta: {
      eyebrow: 'Passer à l’action',
      title: `Tu veux comprendre avant de te lancer${nb}?`,
      lead: 'C’est exactement le bon réflexe. Une première séance permet de poser ton objectif, de voir comment on travaille et de choisir le format dans lequel tu apprendras le mieux.',
    },
  },

  // ============================================================ RÉSERVATION
  booking: {
    seo: {
      title: `Réservation${nb}: commencer par comprendre les bases`,
      description: `Réserve ta séance de coaching sportif${nb}: un bilan, un objectif réaliste et de premières explications sur ton entraînement, dans le format qui te convient.`,
    },
    hero: {
      eyebrow: 'Réservation',
      titleLead: 'Première séance,',
      titleMark: 'premières explications',
      lead: `Une séance pour poser ton objectif, comprendre ton quotidien et découvrir la façon dont on va travailler. Inutile d’arriver avec des connaissances${nb}: un bilan honnête, et déjà quelques explications pour bien démarrer.`,
    },
    cta: {
      eyebrow: 'Dernier détail',
      title: 'Une séance pour comprendre par où commencer',
      lead: 'Tu fais le point sur ton niveau, tu sais par quoi commencer et pourquoi, et tu repars avec des explications utiles pour la suite.',
    },
  },

  // ================================================================ CONTACT
  contact: {
    seo: {
      title: `Contact${nb}: aucune question n’est trop simple`,
      description: `Une question sur un exercice, un format ou le déroulé du coaching sportif${nb}? Écris, appelle ou réserve directement ta séance.`,
    },
    hero: {
      eyebrow: 'Contact',
      titleLead: `Quelque chose t’échappe${nb}?`,
      titleMark: 'On t’explique',
      lead: `Écris ou appelle, et ton coach te répond directement, sans formulaire intermédiaire. Aucune question n’est trop simple${nb}: dis où tu en es et ce que tu voudrais comprendre, on verra ensemble si l’accompagnement te correspond.`,
    },
    cta: {
      eyebrow: 'Passer à l’action',
      title: 'Ta question mérite une vraie réponse',
      lead: `Pour une question ponctuelle, écris-nous. Pour apprendre à t’entraîner, réserve plutôt une première séance${nb}: c’est là que les explications commencent.`,
    },
  },

  // ================================================================= OFFRES
  offers: [
    {
      summary: `Une séance individuelle où chaque exercice est montré et expliqué${nb}: posture corrigée en direct, intensité adaptée à ta forme du jour.`,
      description:
        'Pendant toute la séance, ton coach démontre chaque exercice, en explique simplement l’intérêt et corrige ta posture en direct. Tu comprends ce que tu fais, et ton autonomie grandit au fil des séances.',
      includes: [
        `Bilan de départ${nb}: objectifs, habitudes, niveau d’activité`,
        'Séances en salle, à domicile ou en extérieur, selon la zone couverte',
        'Démonstrations et corrections commentées, mouvement par mouvement',
        `Points d’étape réguliers${nb}: ce que tu maîtrises, ce qui reste à travailler`,
      ],
      forWho:
        'Tu débutes ou tu reprends, et tu veux enfin comprendre les exercices que tu fais, avec des explications données sur place.',
    },
    {
      summary: `Les mêmes explications, à distance${nb}: une séance guidée en direct, où que tu sois.`,
      description:
        'Depuis chez toi, ta salle ou un lieu de déplacement, la séance est menée en direct par caméra. Chaque consigne est expliquée à voix haute, et tes mouvements sont observés puis corrigés au fil des séries.',
      includes: [
        'Séance guidée en direct, échauffement et retour au calme compris',
        'Exercices adaptés au matériel disponible, ou sans matériel',
        'Conseils pour bien t’installer face à la caméra',
        'Explication des points à travailler d’une séance à l’autre',
      ],
      forWho:
        'Tu te déplaces souvent ou tu habites loin, et tu veux quand même recevoir des explications en direct pendant la séance.',
    },
    {
      summary: `Un plan écrit et commenté${nb}: séances, séries, temps de repos, progression et raison d’être de chaque exercice.`,
      description:
        'Ce programme part de ton objectif, de ton niveau et du matériel dont tu disposes. Chaque séance est détaillée et chaque exercice accompagné d’une explication simple, pour que tu saches quoi faire et pourquoi. Le plan évolue à chaque fin de cycle.',
      includes: [
        `Entretien de cadrage${nb}: objectif, contraintes, matériel`,
        'Plan structuré en cycles, avec une progression expliquée',
        'Consignes d’exécution détaillées et variantes si un équipement manque',
        'Révision commentée du plan en fin de cycle',
      ],
      forWho:
        'Tu t’entraînes déjà de ton côté, mais tu suis des exercices sans toujours savoir à quoi ils servent ni comment les faire évoluer.',
    },
    {
      summary: `Des repères d’hygiène alimentaire expliqués simplement${nb}: pas de régime, pas d’aliment interdit.`,
      description:
        'Aucun régime, aucun aliment interdit, aucune pesée à chaque repas. À partir de ce que tu manges déjà, on t’explique quelques repères généraux d’hygiène alimentaire, pour que tu saches organiser tes repas autour de ton entraînement sans dépendre d’une liste toute faite.',
      includes: [
        'Point sur tes habitudes actuelles, sans jugement',
        'Repères simples pour composer tes repas, avec leur logique',
        'Organisation des repas autour des séances et des jours de repos',
        'Idées de repas rapides et de courses réalistes',
      ],
      forWho:
        'Tu t’entraînes régulièrement et tu veux comprendre comment ton alimentation peut suivre, plutôt que d’appliquer des régimes les uns après les autres.',
    },
  ],
};
