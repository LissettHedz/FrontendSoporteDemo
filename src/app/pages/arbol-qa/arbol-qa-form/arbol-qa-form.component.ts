import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArbolQa } from 'src/app/data/models/arbol-qa';
import { ArbolQaService } from 'src/app/data/services/arbol-qa.services';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-arbol-qa-form',
  templateUrl: './arbol-qa-form.component.html',
  styleUrls: ['./arbol-qa-form.component.scss']
})
export class ArbolQaFormComponent implements OnInit, OnDestroy {

  form: FormGroup;
  suscription: Subscription;
  arbol: ArbolQa;
  idArbol = 0;

  constructor(private formBuilder: FormBuilder,
              private arbolService: ArbolQaService) {
                this.form = this.formBuilder.group({
                  id: 0,
                  sucursal: ['', [Validators.required]],
                  zona: ['', [Validators.required]],
                  pagoNoRegistrado: ['', [Validators.required]],
                  domicilioConAdeudo: ['', [Validators.required]],
                  cargosImprocedentes: ['', [Validators.required]],
                  folioNoIngresado: ['', [Validators.required]],
                  aclaracionVenta: ['', [Validators.required]],
                  contratoDuplicado: ['', [Validators.required]],
                  imposibilidadTecnica: ['', [Validators.required]],
                  danosPropiedad: ['', [Validators.required]],
                  quejaRepetitival: ['', [Validators.required]],
                  mantenimientoPendiente: ['', [Validators.required]],
                  equipoNoRegistrado: ['', [Validators.required]],
                  trabajoPro: ['', [Validators.required]],
                  cambioCiudad: ['', [Validators.required]],
                  validarTrabajoAtendido: ['', [Validators.required]],
                  auditoria: ['', [Validators.required]],
                  malServicoCis: ['', [Validators.required]],
                  malServicioCambaceo: ['', [Validators.required]],
                  malServicioTecnico: ['', [Validators.required]],
                  aplicarPagosEquivocados: ['', [Validators.required]],
                  quejaPorRetMegared: ['', [Validators.required]],
                  quejaPorRetCable: ['', [Validators.required]],
                  portabilidadMal: ['', [Validators.required]],
                });


               }

  ngOnInit(): void {
    this.suscription = this.arbolService.obtenerArbol$().subscribe(data => {
      console.log(data);
      this.arbol = data;
      this.form.patchValue({
        sucursal: this.arbol.sucursal,
        zona: this.arbol.zona,
        pagoNoRegistrado: this.arbol.pagoNoRegistrado,
        domicilioConAdeudo: this.arbol.domicilioConAdeudo,
        cargosImprocedentes: this.arbol.cargosImprocedentes,
        folioNoIngresado: this.arbol.folioNoIngresado,
        aclaracionVenta: this.arbol.aclaracionVenta,
        contratoDuplicado: this.arbol.contratoDuplicado,
        imposibilidadTecnica: this.arbol.imposibilidadTecnica,
        danosPropiedad: this.arbol.danosPropiedad,
        quejaRepetitival: this.arbol.quejaRepetitival,
        mantenimientoPendiente: this.arbol.mantenimientoPendiente,
        equipoNoRegistrado: this.arbol.equipoNoRegistrado,
        trabajoPro: this.arbol.trabajoPro,
        cambioCiudad: this.arbol.cambioCiudad,
        validarTrabajoAtendido: this.arbol.validarTrabajoAtendido,
        auditoria: this.arbol.auditoria,
        malServicoCis: this.arbol.malServicoCis,
        malServicioCambaceo: this.arbol.malServicioCambaceo,
        malServicioTecnico: this.arbol.malServicioTecnico,
        aplicarPagosEquivocados: this.arbol.aplicarPagosEquivocados,
        quejaPorRetMegared: this.arbol.quejaPorRetMegared,
        quejaPorRetCable: this.arbol.quejaPorRetCable,
        portabilidadMal: this.arbol.portabilidadMal
      });
      this.idArbol = this.arbol.id;
    });
  }

  ngOnDestroy() {
    this.suscription.unsubscribe();
  }

  editar() {
    const arbol: ArbolQa = {
      id: this.arbol.id,
      sucursal: this.form.get('sucursal').value,
      zona: this.form.get('zona').value,
      pagoNoRegistrado: this.form.get('pagoNoRegistrado').value,
      domicilioConAdeudo: this.form.get('domicilioConAdeudo').value,
      cargosImprocedentes: this.form.get('cargosImprocedentes').value,
      folioNoIngresado: this.form.get('folioNoIngresado').value,
      aclaracionVenta: this.form.get('aclaracionVenta').value,
      contratoDuplicado: this.form.get('contratoDuplicado').value,
      imposibilidadTecnica: this.form.get('imposibilidadTecnica').value,
      danosPropiedad: this.form.get('danosPropiedad').value,
      quejaRepetitival: this.form.get('quejaRepetitival').value,
      mantenimientoPendiente: this.form.get('mantenimientoPendiente').value,
      equipoNoRegistrado: this.form.get('equipoNoRegistrado').value,
      trabajoPro: this.form.get('trabajoPro').value,
      cambioCiudad: this.form.get('cambioCiudad').value,
      validarTrabajoAtendido: this.form.get('validarTrabajoAtendido').value,
      auditoria: this.form.get('auditoria').value,
      malServicoCis: this.form.get('malServicoCis').value,
      malServicioCambaceo: this.form.get('malServicioCambaceo').value,
      malServicioTecnico: this.form.get('malServicioTecnico').value,
      aplicarPagosEquivocados: this.form.get('aplicarPagosEquivocados').value,
      quejaPorRetMegared: this.form.get('quejaPorRetMegared').value,
      quejaPorRetCable: this.form.get('quejaPorRetCable').value,
      portabilidadMal: this.form.get('portabilidadMal').value,
    };
    this.arbolService.actualizarArbol(this.idArbol, arbol).subscribe(data => {
      // this.toastr.info('Registro Actualizado', 'El arbol Qa fue actualizado');
      this.arbolService.obtenerArbol(); // Se actualizara de forma automatica el listado 
      this.form.reset();
      this.idArbol = 0;
    });
  }

}
