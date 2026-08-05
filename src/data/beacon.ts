import aminaQutub from '~/assets/images/beacon/amina-qutub.jpg';
import brianEastridge from '~/assets/images/beacon/brian-eastridge.jpg';
import markGoldberg from '~/assets/images/beacon/mark-goldberg.jpg';
import elizabethScherer from '~/assets/images/beacon/elizabeth-scherer.jpg';

export const stats = [
  { value: '~1M', label: 'trauma care cases', detail: 'used in training · 2019–2026' },
  { value: '7', label: 'partner hospital systems', detail: 'building a multi-site foundation' },
  { value: '30+', label: 'clinical + AI team members', detail: 'working across disciplines' },
  { value: '2', label: 'partner startups', detail: 'helping move tools into real-world care' },
];

export const goals = [
  {
    number: '01',
    phase: 'Before arrival',
    title: 'Make the next decision clearer',
    description: 'Human-guided AI for triage, transfer, and getting patients to the right level of care faster.',
    accent: 'orange',
  },
  {
    number: '02',
    phase: 'Across the system',
    title: 'Build infrastructure that can scale',
    description: 'Shared data, validated AI pipelines, and a roadmap for consistent deployment across the state and nation.',
    accent: 'blue',
  },
  {
    number: '03',
    phase: 'Through recovery',
    title: 'Stay with survivors after the emergency',
    description: 'Patient-centered data and AI support for brain injury and stroke recovery over time. Patient-centered recovery outcomes create a learning loop that improves medical decisions.',
    accent: 'green',
  },
];

export const people = [
  {
    id: 'amina-qutub',
    name: 'Amina Ann Qutub, PhD',
    role: 'Project Lead · Biomedical Engineer',
    image: aminaQutub,
    bio: 'BEACON project lead and Burzik Professor in Engineering Design at UT San Antonio. Qutub brings biomedical engineering and AI expertise to a clinician-in-the-loop approach for emergency decision support and recovery.',
    focus: 'AI systems · biomedical engineering · translational design',
  },
  {
    id: 'brian-eastridge',
    name: 'Brian Eastridge, MD',
    role: 'Co-PI · Trauma Surgeon',
    image: brianEastridge,
    bio: 'Professor of Surgery at UT Health San Antonio, Division Chief of Trauma and Emergency Surgery and the Jocelyn and Joe Straus Endowed Chair in Trauma Research. He brings deep expertise in trauma systems and emergency care.',
    focus: 'Trauma systems · surgery · clinical operations',
  },
  {
    id: 'mark-goldberg',
    name: 'Mark Goldberg, MD',
    role: 'Co-PI · Neurologist',
    image: markGoldberg,
    bio: 'LeWinn Endowed Professor in Neurology at UT Health San Antonio specializing in stroke and cerebrovascular disorders, with research focused on recovery after stroke and brain injury.',
    focus: 'Stroke · brain injury · neurologic recovery',
  },
  {
    id: 'elizabeth-scherer',
    name: 'Elizabeth Scherer, MD, MPH',
    role: 'Co-PI · Trauma & Critical Care',
    image: elizabethScherer,
    bio: 'Assistant Professor of Trauma and Emergency Surgery and Surgical Critical Care Fellowship Director. With her deep expertise in trauma care, Scherer helps shape realistic clinical scenarios and evaluates whether AI outputs are consistent, meaningful, and actionable.',
    focus: 'Critical care · triage · clinical validation',
  },
];

export const involvement = [
  {
    id: 'give',
    eyebrow: 'Give',
    title: 'Accelerate what can reach patients',
    summary:
      'Support clinical validation, survivor-centered design, and the infrastructure needed to move promising tools into care.',
    dialogTitle: 'Give to BEACON',
    dialogBody:
      'Philanthropic and strategic support can help expand clinical validation, patient-centered recovery work, implementation research, and the shared infrastructure required for multi-site deployment.',
    nextStep:
      'Support can expand clinical validation, survivor-centered recovery work, and the infrastructure needed for multi-site deployment. Formal giving routes can be shared through participating institutions.',
  },
  {
    id: 'collaborate',
    eyebrow: 'Collaborate',
    title: 'Build with us',
    summary:
      'Clinicians, engineers, startups, hospitals, rehabilitation teams, and data partners can help build and test the ecosystem.',
    dialogTitle: 'Collaborate with BEACON',
    dialogBody:
      'BEACON is a project of the iRemedyACT Consortia, building one of the most comprehensive AI and data ecosystems for trauma care and stroke in the world. Partners welcome across the spectrum of trauma and stroke care and recovery.',
    nextStep:
      'Potential collaborators can begin by identifying the clinical, technical, deployment, data, or survivor-centered expertise they can contribute. Partnership routes can be shared through participating institutions.',
  },
  {
    id: 'participant',
    eyebrow: 'Become a Participant',
    title: 'Help shape recovery around real lives',
    summary:
      'Survivors and families can contribute perspectives that make future studies and recovery tools more useful and humane.',
    dialogTitle: 'Participate in BEACON research',
    dialogBody:
      'BEACON Phase II is being designed to help people recovering from trauma, brain injury, or stroke, as well as caregivers. Participation opportunities will depend on study approvals, eligibility, and active recruitment at partner sites.',
    nextStep:
      'When studies are open, participation details should come through approved research recruitment channels at participating sites. Eligibility will vary by study and site.',
  },
];
