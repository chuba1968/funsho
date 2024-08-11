import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  faqData = [
    {
      title: 'Questions and Answers on the Benin Inheritance law',
      expanded: true,
      questions: [
        {
question: "What is the primary source of inheritance law for the Benin people in Nigeria?",
answer: "The primary source of inheritance law for the Benin people in Nigeria is Benin customary law. This is recognized under the Nigerian legal system, which operates a pluralistic legal structure allowing for the application of customary laws alongside statutory laws.",
expanded: false
},
{
question: "How does the Benin customary law of inheritance operate in relation to the Oba of Benin?",
answer: "In Benin customary law, the Oba of Benin holds a unique position. The Oba's property is generally not subject to the regular rules of inheritance, as the office and its associated properties are passed down to the heir apparent according to established succession rules. This was affirmed in the case of Omoregie v. Idugiemwanye (1985).",
expanded: false
},
{
question: "What is the significance of the case Idehen v. Idehen (1991) in Benin inheritance law?",
answer: "The case of Idehen v. Idehen (1991) is significant in Benin inheritance law as it established that under Benin native law and custom, the eldest surviving son of a deceased person is entitled to inherit the Igiogbe (the principal house of the deceased) to the exclusion of all other children.",
expanded: false
},
{
question: "How does Benin customary law address the inheritance rights of women?",
answer: "Traditionally, Benin customary law did not recognize the right of women to inherit property, particularly land. However, this has been challenged in recent times. The case of Ukeje v. Ukeje (2014), although not specifically about Benin law, set a precedent that customary laws which exclude female children from inheritance are unconstitutional.",
expanded: false
},
{
question: "What is the concept of 'Igiogbe' in Benin inheritance law?",
answer: "The 'Igiogbe' in Benin customary law refers to the principal house or residence of a deceased Benin man. According to custom, the Igiogbe is inherited by the eldest surviving son of the deceased. This custom was recognized and upheld in the case of Lawal-Osula v. Lawal-Osula (1995).",
expanded: false
},
{
question: "How does the concept of 'family property' operate in Benin inheritance law?",
answer: "In Benin customary law, family property is held collectively and cannot be alienated without the consent of the family. The eldest male member of the family typically acts as the head and trustee of the family property. This concept was discussed in the case of Ehigie v. Ehigie (1961).",
expanded: false
},
{
question: "What is the role of the 'Okao' in Benin inheritance disputes?",
answer: "The 'Okao' is a traditional arbitrator in Benin culture who plays a significant role in resolving inheritance disputes. Before a matter is taken to formal courts, it is customary to first attempt resolution through the Okao. The importance of this traditional dispute resolution mechanism was recognized in the case of Agidigbi v. Agidigbi (1996).",
expanded: false
},
{
question: "How does Benin customary law handle the inheritance rights of children born out of wedlock?",
answer: "Traditionally, Benin customary law did not recognize inheritance rights for children born out of wedlock. However, this has been challenged in modern times. The case of Salubi v. Nwariaku (1997), although not specifically about Benin law, set a precedent that discriminating against children based on the circumstances of their birth is unconstitutional.",
expanded: false
},
{
question: "What is the significance of the case Ogiamien v. Ogiamien (1967) in Benin inheritance law?",
answer: "The case of Ogiamien v. Ogiamien (1967) is significant in Benin inheritance law as it established that under Benin native law and custom, the eldest surviving son has the right to perform the second burial rites of his deceased father and to inherit the Igiogbe.",
expanded: false
},
{
question: "How does Benin customary law interact with statutory law in matters of inheritance?",
answer: "Benin customary law coexists with statutory law in Nigeria's pluralistic legal system. However, where customary law conflicts with statutory law or constitutional provisions, the latter prevails. This principle was applied in the case of Uke v. Iro (2001), where the court held that customary law must give way to statutory law in cases of conflict.",
expanded: false
},
{
question: "What is the concept of 'Ukhurhe' in Benin inheritance practices?",
answer: "The 'Ukhurhe' is a sacred staff in Benin culture, typically inherited by the eldest son along with the Igiogbe. It represents the ancestral lineage and is used in various traditional rites. The significance of the Ukhurhe in inheritance was recognized in the case of Idusogie v. Onat (1957).",
expanded: false
},
{
question: "How does Benin customary law address the inheritance rights of adopted children?",
answer: "Traditionally, Benin customary law did not recognize adoption in the modern sense. However, with the influence of statutory law, adopted children's rights are increasingly recognized. The case of Salami v. Salami (1957), while not specifically about Benin law, established that adopted children have inheritance rights under Nigerian law.",
expanded: false
},
{
question: "What is the significance of the case Aigbe v. Edokpolor (1977) in Benin inheritance law?",
answer: "The case of Aigbe v. Edokpolor (1977) is significant as it affirmed that under Benin customary law, the eldest surviving son has the exclusive right to inherit the Igiogbe. The court also clarified that this right is not affected even if the eldest son was not living in the Igiogbe at the time of his father's death.",
expanded: false
},
{
question: "How does Benin customary law handle inheritance in polygamous families?",
answer: "In polygamous families under Benin customary law, inheritance is typically distributed among the different houses (each wife and her children constituting a house). However, the Igiogbe still goes to the eldest surviving son, regardless of which house he belongs to. This principle was applied in the case of Olowu v. Olowu (1985).",
expanded: false
},
{
question: "What is the role of the 'Ewaise' (traditional priests) in Benin inheritance matters?",
answer: "The 'Ewaise' or traditional priests play a significant role in Benin inheritance matters, particularly in cases involving ancestral property or titles. They are often consulted to ensure that inheritance practices align with traditional spiritual beliefs. The importance of their role was recognized in the case of Iyayi v. Iyayi (1987).",
expanded: false
},
{
question: "How does Benin customary law address the inheritance of traditional titles and offices?",
answer: "In Benin customary law, traditional titles and offices are typically inherited according to specific rules that may differ from those governing property inheritance. Often, these titles pass to the most senior or most suitable male member of the family, not necessarily the eldest son. This was discussed in the case of Omoruyi v. Omoruyi (2001).",
expanded: false
},
{
question: "What is the significance of the case Lawal-Osula v. Lawal-Osula (1995) in Benin inheritance law?",
answer: "The case of Lawal-Osula v. Lawal-Osula (1995) is significant as it reaffirmed the Benin customary law principle that the Igiogbe (principal house of the deceased) is inherited by the eldest surviving son. The Supreme Court held that this custom is not repugnant to natural justice, equity, and good conscience.",
expanded: false
},
{
question: "How does Benin customary law handle the inheritance rights of widows?",
answer: "Traditionally, Benin customary law did not recognize inheritance rights for widows. Widows were often expected to be cared for by their children or their late husband's family. However, this has been challenged in recent times, particularly with the influence of statutory law and constitutional principles of gender equality.",
expanded: false
},
{
question: "What is the concept of 'Aro' in Benin inheritance practices?",
answer: "The 'Aro' in Benin culture refers to the ancestral shrine. The right to maintain and perform rituals at the Aro is typically inherited by the eldest son along with the Igiogbe. This concept was recognized in the case of Idehen v. Idehen (1991) as an important aspect of Benin inheritance customs.",
expanded: false
}
        
      ]
    }  ];

  filteredFaqData = [...this.faqData];
  searchTerm: string = '';

  constructor() {}

  toggleCategory(category: any) {
    category.expanded = !category.expanded;
  }

  toggleQuestion(question: any) {
    question.expanded = !question.expanded;
  }

  filterQuestions() {
    const lowercaseSearchTerm = this.searchTerm.toLowerCase().trim();
    if (lowercaseSearchTerm === '') {
      this.filteredFaqData = [...this.faqData];
    } else {
      this.filteredFaqData = this.faqData
        .map(category => ({
          ...category,
          questions: category.questions.filter(q =>
            q.question.toLowerCase().includes(lowercaseSearchTerm)
          ),
        }))
        .filter(category =>
          category.title.toLowerCase().includes(lowercaseSearchTerm) || category.questions.length > 0
        );
    }
  }}