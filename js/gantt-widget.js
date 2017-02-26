$weeks = $('.gantt .weeks');
$info = $('.gantt');

function generateWeek() {
  weeks = '';
  w = 1
  offset = $info.attr('data-start-offset');
  for (i = 0; i < 16; i++) {
    if (offset < (i+1) && i < 14) {
      weeks += '<div>'+ w +'</div>'
      w++;
    } else {
      weeks += '<div></div>'
    }
  }
  $weeks.html(weeks);
}

function generateLines() {
  lines = []
  $lines = $('.data span');

  $.each($lines, function (index, line) {
    text = $(line).attr('data-title');
    nb = $(line).attr('data-nb');
    offset = $(line).attr('data-nb-offset');

    label = '<div class="text">'+ text +'</div>'
    bar = '<div class="bar" data-nb="'+ nb +'" data-nb-offset="'+ offset +'">'+ nb +'</div>';
    lines.push('<div class="phase">'+ label + bar +'</div>')
  })

  $('.gantt .lines').html(lines.join(''));
  $bars = $('.gantt .bar');

  generateBar()
}

function generateBar() {
  $.each($bars, function (index, bar) {
    $bar = $(bar);
    nb = $bar.attr('data-nb');
    offset = $bar.attr('data-nb-offset');
    $bar.css('width', (nb * 5) + '%')
    if (offset) {
      $bar.css('margin-left', (offset * 5) + '%')
    }
  })
}

function generateGantt() {
  generateWeek()
  generateLines()
}

generateGantt();
