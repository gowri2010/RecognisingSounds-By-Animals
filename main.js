function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Nv4Ouidq2/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")";
    
        img = document.getElementById('lion-roar');
        img1 = document.getElementById('puppy-bark');
        img2 = document.getElementById('cat-meow');
        img3 = document.getElementById('cow-moo');

        if (results[0].label == "Roaring") {
            img.src = 'lion-roar.gif';
            img1.src = 'puppy-bark.png';
            img2.src = 'cat-meow.png';
            img3.src = 'cow-moo.png';
        }else if (results[0].label == "Barking") {
            img.src = 'lion-roar.png';
            img1.src = 'puppy-bark.gif';
            img2.src = 'cat-meow.png';
            img3.src = 'cow-moo.png';
        }else if (results[0].label =="Meowing") {
            img.src = 'lion-roar.png';
            img1.src = 'puppy-bark.png';
            img2.src = 'cat-meow.gif';
            img3.src = 'cow-moo.png';
        }else if (results[0].label == "Mooing") {
        img.src = 'lion-roar.png';
        img1.src = 'puppy-bark.png';
        img2.src = 'cat-meow.png';
        img3.src = 'cow-moo.gif';
        }
    }
}
