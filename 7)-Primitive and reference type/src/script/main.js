// Primitive and reference types

//  ! primitive types
// Numbers
// boolean values
// null
// undefined
// String
// symbol
// bigint
// ! bigintin number ile elaqesi yoxudr boyuk ededlerle islemek ucundur meselen 123519465659848448484n bele

// ! reference types
// Objects
// Arrays
// Functions

/*
stack ve heap

Stack yaddaşı kod yazarkən dəyəri statik olaraq təyin olunan primitiv tipli dəyişənləri və obyekt referanslarını (referance) özündə saxlayır. Primitiv tipli dəyişənlərin istifadə edəcəkləri yaddaş sahəsi əvvəlcədən təyin olunur və yaddaşda müəyyən bir ünvana sahib olur. Belə dəyişənlərə əsasən lokal dəyişənlər aid edilir. Stack yaddaşında həmçinin primitiv tipli dəyişənlərdən istifadə edən funksiyalarda saxlanır. Stack yaddaşında saxlanan dəyişənlərə proqramın birbaşa müraciəti vardır və buna görə də stack yaddaşdan oxuma və yazma daha sürətlidir. Stack yaddaşın mənfi cəhəti onun həcminin limitli olmasıdır

Heap yaddaş sahəsi kodda elan olunan və proqramın icrası zamanı hər hansı bir mərhələsində dinamik olaraq dəyişə bilən və yaddaşda primitiv tiplərə nəzərən daha çox yer tutan obyektləri saxlamaq üçün ayrılır. Biz kodda hər hansı dəyişən elan edərkən onun dəyərini təyin etmədiyimiz zaman bir “pointer”, yəni bir referans yaratmış oluruq. Məsələni daha da açıqlamış olsaq, bir ünvan yaradırıq. Lakin yaratdığımız bu ünvan heç bir yeri göstərmir. Bu zaman yaratdığımız ünvan stack yaddaşında qeyd olunur. Proqramın icrası zamanı irəliləyən mərhələlərdə bu ünvana hər hansı bir dəyər təyin etdikdə bu dəyər artıq heap yaddaşında saxlanır və stack yaddaşında olan ünvan ilə əlaqələndirilir. Yəni biz həmin dəyəri çağırarkən stack yaddaşında yerləşən ünvana müraciət edirik və o da bizə heap`dəki dəyəri gətirir. Beləliklə, heap yaddaşa bizim birbaşa müraciət etməyimiz mümkün olmur. Buna görə də heap yaddaşa müraciət stack yaddaşa nisbətən daha ləngdir və heap yaddaşın həcmi stack yaddaşa nisbətən daha çox olur.

Heap və stack yaddaşlarının digər fəqli cəhəti isə odur ki, stack yaddaşı siz idarə etmirsiniz. Yaddaş CPU tərəfindən səmərəli şəkildə idarə olunur. Yəni dəyişən proqram daxilində istifadə olunandan sonra əgər bir daha bizə lazım olmayacaqsa stack yaddaşından silinir. Artıq bizim bunun üçün əlavə nəsə etməyə ehtiyacımız qalmır. Amma heap yaddaş belə idarə olunmur. Lazımsız obyekt və dəyişənləri biz özümüz yaddaşdan təmizləməliyik. Əgər biz bunu etməsək proqramımız gərəksiz yerə yaddaşdan daha çox istifadə edəcək və məhsuldarlıq aşağı düşəcək.

*/

// let a = 5;
// let b = a;

// console.log("a: " + a);
// console.log("b: " + b);
// ! indi burda byə  7 versəm a eyni qalır b isə 7 olur

// b = 7;
// console.log(a);
// console.log(b);

// ! ancaq reference typlarda bele deyil arr2 ni deyissek arr1 de deyisilir

// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// console.log(arr1);
// console.log(arr2);

// arr2.push(5);

// console.log(arr1);
// console.log(arr2);

// ! ve elave olaraqda arr1 ve ya arr2 stacka dusur onun deyterleri ise heapa dusur anucaq a və b primitiv olduğu üçün bir başa stacka düşür
