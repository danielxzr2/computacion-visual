using UnityEngine;

public class MoverObjeto : MonoBehaviour
{
    public float tiempoEntreMovimientos = 2f;
    public float distanciaMovimiento = 1f;
    public float velocidadRotacion = 90f; // grados por segundo
    public float escalaBase = 1f;
    public float amplitudEscala = 0.3f;

    private float tiempoSiguienteMovimiento;

    void Start()
    {
        tiempoSiguienteMovimiento = Time.time + tiempoEntreMovimientos;
    }

    void Update()
    {
        // Movimiento aleatorio por X o Y cada ciertos segundos
        if (Time.time >= tiempoSiguienteMovimiento)
        {
            int eje = Random.Range(0, 2); // 0 = X, 1 = Y
            Vector3 direccion = eje == 0 ? Vector3.right : Vector3.up;
            float signo = Random.value > 0.5f ? 1f : -1f;

            transform.Translate(direccion * signo * distanciaMovimiento, Space.World);

            tiempoSiguienteMovimiento = Time.time + tiempoEntreMovimientos;
        }

        // Rotación constante (alrededor del eje Y)
        transform.Rotate(Vector3.up * velocidadRotacion * Time.deltaTime);

        // Escalado oscilante con Mathf.Sin
        float escala = escalaBase + Mathf.Sin(Time.time) * amplitudEscala;
        transform.localScale = new Vector3(escala, escala, escala);
    }
}
