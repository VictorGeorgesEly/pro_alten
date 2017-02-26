$phases = $('[data-option-phase]');
$table = $('[data-item-table]');
$total = $('[data-base-jeh]');
frais = 25; // €
lastOffset = 8;

$frais = $('[data-frais]');
$fraisLet = $('[data-frais-letters]')

$totalOption = $('[data-total-jeh-options]')
$totalJEH = $('[data-total-jeh]');
$totalJEHLet = $('[data-total-jeh-letters]');

$totalHT = $('[data-total-ht]');
$totalHTLet = $('[data-total-ht-letters]');
$totalEUR = $('[data-total]');
$totalEURLet = $('[data-total-letters]');

$ganttPhasesOpt = $('[data-phases-opt]');

function fPrice(price) {
  if (price > 1000) {
    thousands = price.toString().slice(0,-3);
    return thousands + ' ' + price.toString().slice(-3, price.toString().length);
  }
  return price
}

function generateOptionalPhases() {
  rows = ''
  ganttPhases = []
  lastOffset = 8
  lastNb = 0
  $('.options-phases').show();
  $.each($phases, function (index, phase) {
    $phase = $(phase);
    if ($phase.hasClass('selected')) {
      name = $phase.attr('data-phase-name');
      jehDiff = $phase.attr('data-jeh-diff');
      duree = parseInt($phase.attr('data-phase-duree'));
      debut = parseInt($phase.attr('data-phase-debut'));

      // gantt
      ganttPhases.push('<span data-title="'+ name +'" data-nb="'+ duree +'" data-nb-offset="'+ debut +'"></span>')

      if (debut + duree >= lastOffset) {
        lastOffset = debut + duree
      }

      // table
      rows += '<tr><td>'+ name +'</td><td>'+ jehDiff +' JEH</td></tr>'
    }
  })
  if(rows == '') {
    $('.options-phases').hide();
  }

  $ganttPhasesOpt.html(ganttPhases.join(''));
  $final = $('[data-final-phase]');

  if (lastOffset > 8) {
    $final.attr('data-nb-offset', lastOffset);
  } else {
    $final.attr('data-nb-offset', lastOffset);
  }

  generateGantt()
  $table.html(rows);
}

function updateButtonText($phase) {
  if ($phase.hasClass('selected')) {
    $phase.html('Retirer cette option (-'+ $phase.attr('data-jeh-diff') +' JEH)');
  } else {
    $phase.html('Choisir cette option (+'+ $phase.attr('data-jeh-diff') +' JEH)');
  }
}

function updateTotal() {
  totalJEH = parseInt($total.attr('data-base-jeh'));
  totalPhase = 0;
  $.each($phases, function (index, phase) {
    if ($(phase).hasClass('selected')) {
      totalJEH += parseInt($(phase).attr('data-jeh-diff'));
      totalPhase += parseInt($(phase).attr('data-jeh-diff'));
    }
  })
  $total.html(totalJEH + ' JEH')
  $totalOption.html(totalPhase + ' JEH');
  var totalHT = 340 * totalJEH + (frais * totalJEH);
  var totalTTC = (340 * totalJEH + (frais * totalJEH)) * 1.2;

  $frais.html(fPrice(frais * totalJEH) + ' €')
  $fraisLet.html(writtenNumber(frais * totalJEH, {lang: 'fr'}));

  $totalHT.html(fPrice(totalHT) + ' €');
  $totalHTLet.html(writtenNumber(totalHT, { lang: 'fr' }));

  $totalEUR.html(fPrice(totalTTC) + ' €');
  $totalEURLet.html(writtenNumber(totalTTC, { lang: 'fr' }));

  $totalJEH.html(totalJEH);
  $totalJEHLet.html(writtenNumber(totalJEH, { lang: 'fr' }));
}

function onClick(target) {
  $target = $(target);
  $target.toggleClass('selected');
  updateButtonText($target);
}

$phases.click(function () {
  onClick($(this));
  generateOptionalPhases()
  updateTotal()
})

function init() {
  $.each($phases, function (index, phase) {
    $phase = $(phase)
    updateButtonText($phase);
  })
  generateOptionalPhases()
  updateTotal()
}

init();
