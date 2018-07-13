import "./styles.css";
import "./template.html";

var slideshow = remark.create({ 
    ratio: "16:9", 
    navigation: {
        scroll: true,
        touch: true,
        click: false
    } 
});
