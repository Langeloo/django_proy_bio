var lowerSlider = document.querySelector('#lower'),
   upperSlider = document.querySelector('#upper'),
   lower2Slider = document.querySelector('#lower2'),
   upper2Slider = document.querySelector('#upper2'),
   lowerfasta1 = document.querySelector('#lower_fasta1'),
   upperfasta1 = document.querySelector('#upper_fasta1'),
   lowerfasta2 = document.querySelector('#lower_fasta2'),
   upperfasta2 = document.querySelector('#upper_fasta2'),
   lowerVal = parseInt(lowerSlider.value);
   upperVal = parseInt(upperSlider.value);
   lower2val = parseInt(lower2Slider.value);
   upper2val = parseInt(upper2Slider.value);
   lowerfasta1Val = parseInt(lowerfasta1.value);
   upperfasta1Val = parseInt(upperfasta1.value);
   lowerfasta2Val = parseInt(lowerfasta2.value);
   upperfasta2Val = parseInt(upperfasta2.value);

upperSlider.oninput = function() {
   lowerVal = parseInt(lowerSlider.value);
   upperVal = parseInt(upperSlider.value);
   
   if (upperVal < lowerVal + 1) {
      lowerSlider.value = upperVal - 1;
      
      if (lowerVal == lowerSlider.min) {
         upperSlider.value = 2;
      }
   }
   document.getElementById("labelupper").innerHTML = this.value;
   document.getElementById("labellower").innerHTML = lowerSlider.value;
};


lowerSlider.oninput = function() {
   lowerVal = parseInt(lowerSlider.value);
   upperVal = parseInt(upperSlider.value);
   
   if (lowerVal > upperVal - 1) {
      upperSlider.value = lowerVal + 1;
      
      if (upperVal == upperSlider.max) {
         lowerSlider.value = parseInt(upperSlider.max) - 1;
      }

   }
   document.getElementById("labellower").innerHTML = this.value;
   document.getElementById("labelupper").innerHTML = upperSlider.value;
};

upper2Slider.oninput = function() {
   lower2val = parseInt(lower2Slider.value);
   upper2val = parseInt(upper2Slider.value);

   if (upper2val < lower2val + 1) {
      lower2Slider.value = upper2val - 1;

      if (lower2val == lower2Slider.min) {
         upper2Slider.value = 2;
      }
   }
   document.getElementById("labelupper2").innerHTML = this.value;
   document.getElementById("labellower2").innerHTML = lower2Slider.value;
}

lower2Slider.oninput = function() {
   lower2val = parseInt(lower2Slider.value);
   upper2val = parseInt(upper2Slider.value);

   if (lower2val > upper2val - 1) {
      upper2Slider.value = lower2val + 1;

      if (upper2val == upper2Slider.max) {
         lower2Slider.value = parseInt(upper2Slider.max) - 1;
      }
   }
   document.getElementById("labellower2").innerHTML = this.value;
   document.getElementById("labelupper2").innerHTML = upper2Slider.value;
}

// block tab fasta file
upperfasta1.oninput = function() {
   lowerfasta1Val = parseInt(lowerfasta1.value);
   upperfasta1Val = parseInt(upperfasta1.value);

   if (upperfasta1Val < lowerfasta1Val + 1) {
      lowerfasta1.value = upperfasta1Val - 1;

      if (lowerfasta1Val == lowerfasta1.min) {
         upperfasta1.value = 2;
      }
   }
   document.getElementById("labelupper_fasta1").innerHTML = this.value;
   document.getElementById("labellower_fasta1").innerHTML = lowerfasta1.value;
}

lowerfasta1.oninput = function() {
   lowerfasta1Val = parseInt(lowerfasta1.value);
   upperfasta1Val = parseInt(upperfasta1.value);

   if (lowerfasta1Val > upperfasta1Val - 1) {
      upperfasta1.value = lowerfasta1 + 1;

      if (upperfasta1Val == upperfasta1.max) {
         lowerfasta1.value = parseInt(upperfasta1.max) - 1;
      }
   }
   document.getElementById("labellower_fasta1").innerHTML = this.value;
   document.getElementById("labelupper_fasta1").innerHTML = upperfasta1.value;
}

upperfasta2.oninput = function() {
   lowerfasta2Val = parseInt(lowerfasta2.value);
   upperfasta2Val = parseInt(upperfasta2.value);

   if (upperfasta2Val < lowerfasta2Val + 1) {
      lowerfasta2.value = upperfasta2Val - 1;

      if (lowerfasta2Val == lowerfasta2.min) {
         upperfasta2.value = 2;
      }
   }
   document.getElementById("labelupper_fasta2").innerHTML = this.value;
   document.getElementById("labellower_fasta2").innerHTML = lowerfasta2.value;
}

lowerfasta2.oninput = function() {
   lowerfasta2Val = parseInt(lowerfasta2.value);
   upperfasta2Val = parseInt(upperfasta2.value);

   if (lowerfasta2Val > upperfasta2Val - 1) {
      upperfasta2.value = lowerfasta2 + 1;

      if (upperfasta2Val == upperfasta2.max) {
         lowerfasta2.value = parseInt(upperfasta2.max) - 1;
      }
   }
   document.getElementById("labellower_fasta2").innerHTML = this.value;
   document.getElementById("labelupper_fasta2").innerHTML = upperfasta2.value;
}