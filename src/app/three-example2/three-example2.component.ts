import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three-orbitcontrols-ts';
import GLTFLoader from 'three-gltf-loader';
import { Vector3 } from 'three';

@Component({
  selector: 'app-three-example2',
  templateUrl: './three-example2.component.html',
  styleUrls: ['./three-example2.component.scss'],
})
export class ThreeExample2Component implements OnInit, AfterViewInit {
  @ViewChild('Three') three: ElementRef;
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.renderer.render(this.scene, this.camera);
  }

  @HostListener('mousewheel', ['$event'])
  onWheel(event: WheelEvent) {
    this.scale(event.deltaY > 0 ? -0.1 : 0.1);
  }

  @HostListener('window:keydown', ['$event'])
  onKeypress(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowUp':
        this.translate('y', 0.2);
        break;
      case 'ArrowDown':
        this.translate('y', -0.2);
        break;
      case 'ArrowRight':
        this.translate('x', 0.2);
        break;
      case 'ArrowLeft':
        this.translate('x', -0.2);
        break;
    }
  }

  private renderer: any = new THREE.WebGLRenderer();
  private width;
  private height = 500;
  private scene = new THREE.Scene();
  private camera: any;
  private cube = new THREE.BoxGeometry(4, 4, 4);
  private controls: OrbitControls;
  private isSceneReady = false;

  ngOnInit() {
    this.animate();
  }

  ngAfterViewInit() {
    this.width = this.three.nativeElement.offsetWidth;
    this.three.nativeElement.append(this.renderer.domElement);
    this.initialScene();
    this.initialCamera();
    this.initialMesh();
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.isSceneReady = true;
    this.renderer.render(this.scene, this.camera);
  }

  public scale(rate: number) {
    if (this.scene.children.length > 0) {
      this.scene.children[0].scale.multiplyScalar(1 + rate);
      this.renderer.render(this.scene, this.camera);
    }
  }

  private translate(axios: 'x' | 'y', unit: number) {
    if (this.scene.children.length > 0) {
      switch (axios) {
        case 'x':
          this.scene.children[0].translateX(unit);
          break;
        case 'y':
          this.scene.children[0].translateY(unit);
          break;
      }
    }
  }

  private animate() {
    window.requestAnimationFrame(() => this.animate());
    // this.cube.rotateY(degree);
    // this.cube.rotateX(degree);
    if (this.isSceneReady) {
      this.renderer.render(this.scene, this.camera);
      this.controls.update();
    }
  }

  private initialScene() {
    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(0xffffff);
  }

  private initialCamera() {
    this.camera = new THREE.PerspectiveCamera(
      7,
      this.width / this.height,
      0.1,
      1000
    );
    this.camera.position.x = 0;
    this.camera.position.y = 10;
    this.camera.position.z = 40;
    this.camera.lookAt(this.scene.position);
  }

  private initialMesh() {
    const loader = new GLTFLoader();
    loader.load(
      'assets/sources/example.gltf',
      (gltf) => {
        this.scene.add(gltf.scene);
      },
      (xhr) => {
        console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
      },
      (error) => {
        console.error('An error happened', error);
      }
    );
  }
}
