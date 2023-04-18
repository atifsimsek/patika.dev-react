export function shortenTitle(title: string): string {
  if (title.length > 20) {
    return `${title.substring(0, 21)}...`;
  } else {
    return title;
  }
}

let myTitle: string = 'Bu bir örnek paragraf.';
let shortened: string = shortenTitle(myTitle);
